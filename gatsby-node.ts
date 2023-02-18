import type { GatsbyNode } from 'gatsby';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { RelativePathData } from './src/types';
import { REQUIRED_DATA_FILES } from './src/data/constants';
import { toKebabCase } from './src/components/util';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

/**
 * Function that returns true if all required data files
 * exist and false otherwise
 *
 * @param allFile
 * @returns {boolean}
 */
function doRequiredFilesExist(allFile: RelativePathData): boolean {
  for (const edge of allFile.edges) {
    if (!REQUIRED_DATA_FILES.includes(edge.node.relativePath)) {
      return false;
    }
  }
  return true;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Todo: see if there's a way to use fragments to break up massive query
  const { data } = await graphql(
    `
      query {
        allFile(
          sort: { relativePath: ASC }
          filter: { sourceInstanceName: { eq: "scorecards" } }
        ) {
          edges {
            node {
              relativePath
            }
          }
        }
        allAgencyInfoCsv(sort: { A_NAME: ASC }) {
          totalCount
          edges {
            node {
              id
              A_NAME
              A_LOGO
              A_ADD1
              A_ADD2
              A_PHONE
              A_URL
              A_MISSION
              J40_URLTXT
              J40_URLLINK
              A_EMAIL
              J40_TCP
              J40_ANNOUNCE
              J40_AMOUNT
              J40_E1
              J40_E2
              J40_E3
              J40_MOD1
              J40_MOD2
              J40_MOD3
              J40_HIGH
              A_STRATPLANTXT
              A_STRATPLANLINK
              A_NEPA
              NUM_NEPA
              NEPA_H1
              NEPA_H2
              NEPA_H3
              NEPA_TRAIN
              TITLEVI_NAR
              TITLEVI_N
              TITLEVI_R_N
              A_NAR
              TA_N
              TA_E1
              TA_E2
              TA_E3
              PP_N
              PP_E1
              PP_E2
              PP_E3
              TC_NAR
              TC_N
              TC_E1
              TC_E2
              TC_E3
              ECR_HIGH
              PLAN_BOOL
              PLAN_UPDATE
              EJP_E1
              EJP_E2
              EJP_E3
              EJTOOL_N
              EJSTAFF_N
              EJTRAIN_N
              EJWG_N
              EJP_NAR
              IEJ_HIGH
            }
          }
        }
        allImageSharp {
          edges {
            node {
              id
              original {
                src
              }
              gatsbyImageData
            }
          }
        }
      }
    `,
  );

  const { allFile, allAgencyInfoCsv, allImageSharp } = data;

  if (!doRequiredFilesExist(allFile)) {
    throw Error(`Was not able to read in required data`);
  }

  const allAgencyNames = allAgencyInfoCsv.edges.map((edge) => edge.node.A_NAME);

  allAgencyInfoCsv.edges.forEach((edge) => {
    const pathname = `scorecard/${toKebabCase(edge.node.A_NAME)}`;

    // for each agency page, find the gatsbyImageData using the logo field:
    const imageLogoData = allImageSharp.edges.find(({ node }) =>
      node.gatsbyImageData.images.fallback.src.endsWith(edge.node.A_LOGO),
    );

    createPage({
      adjustPath: true,
      path: pathname,
      component: path.resolve(`./src/templates/ScorecardTemplate.tsx`),
      context: {
        allAgencyNames,
        pathname: `/${pathname}`,
        agencyData: edge.node,
        gatsbyImageData: imageLogoData?.node.gatsbyImageData,
      },
    });
  });
};
