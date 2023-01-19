import type { GatsbyNode } from 'gatsby';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { IAllFile } from './src/types';
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
function isRequiredFilesExist(allFile: IAllFile): boolean {
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
        allFile(sort: { relativePath: ASC }) {
          edges {
            node {
              relativePath
            }
          }
        }
        allAgencyInfoCsv(sort: { Name: ASC }) {
          totalCount
          edges {
            node {
              id
              Name
              Contact_Name
              Address_Line_1
              Address_Line_2
              Phone
              Email
              Size
              Value
              Metric
              About_description
            }
          }
        }
        allDeliverInvestCsv(sort: { Agency_Name: ASC }) {
          totalCount
          edges {
            node {
              id
              __typename
              Agency_Name
              DeliverInvest
              T1_Title
              Cat1
              Cat1_N1
              Cat1_N2
              Cat2
              Cat2_N1
              Cat2_N2
              Cat3
              Cat3_N1
              Cat3_N2
              T2_Title
              T2_M1
              T2_N1
              T3_Title
              T3_M1
              T3_N1
              T3_M2
              T3_N2
              T3_M3
              T3_N3
              T4_Title
              T4_M1
              T4_V1
            }
          }
        }
      }
    `,
  );

  const { allFile, allAgencyInfoCsv, allDeliverInvestCsv } = data;

  if (!isRequiredFilesExist(allFile)) {
    throw Error(`Was not able to read in required data`);
  }

  const allAgencyNames = allAgencyInfoCsv.edges.map((edge) => edge.node.Name);

  allAgencyInfoCsv.edges.forEach((edge, index) => {
    const pathname = `scorecard/${toKebabCase(edge.node.Name)}`;

    createPage({
      adjustPath: true,
      path: pathname,
      component: path.resolve(`./src/templates/ScorecardTemplate.tsx`),
      context: {
        allAgencyNames,
        pathname: `/${pathname}`,
        agencyInfo: edge.node,
        deliverInvest: allDeliverInvestCsv.edges[index],
      },
    });
  });
};
