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
              Address_Line_1
              Address_Line_2
              Phone
              Site
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
              Summary
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
              Cat4
              Cat4_N1
              Cat4_N2
              Cat5
              Cat5_N1
              Cat5_N2
              Cat6
              Cat6_N1
              Cat6_N2
              Cat7
              Cat7_N1
              Cat7_N2
              Cat8
              Cat8_N1
              Cat8_N2
              T2_Title
              T2_M1
              T2_N1
              T2_M2
              T2_N2
              T3_Title
              T3_M1
              T3_N1
              T3_M2
              T3_N2
              T3_M3
              T3_N3
              T3_M4
              T3_N4
              T4_Title
              T4_M1
            }
          }
        }
        allReduceHarmCsv(sort: { Agency_Name: ASC }) {
          totalCount
          edges {
            node {
              id
              Agency_Name
              Summary
              Row11
              Row12
              Row21
              Row22
              Row31
              Row32
              Row41
              Row42
            }
          }
        }
        allInstitutEjCsv(sort: { Agency_Name: ASC }) {
          totalCount
          edges {
            node {
              id
              Agency_Name
              Summary
              Row11
              Row12
              Row13
              Row21
              Row22
              Row23
              Row31
              Row32
              Row41
              Row42
              Row51
              Row52
              Row61
              Row62
              Row71
              Row72
              Row81
              Row82
              Row91
              Row92
              Row93
              Row101
              Row102
              Row111
              Row112
              Row113
              Row121
              Row122
              Row131
              Row132
              Row141
              Row142
              Row151
              Row152
              Row161
              Row162
              Row171
              Row172
              Row181
              Row182
              Row191
              Row192
              Row201
              Row202
            }
          }
        }
        allAdditionalCsv(sort: { Agency_Name: ASC }) {
          totalCount
          edges {
            node {
              id
              Agency_Name
              P1
              P2
              P3
            }
          }
        }
      }
    `,
  );

  const {
    allFile,
    allAgencyInfoCsv,
    allDeliverInvestCsv,
    allReduceHarmCsv,
    allInstitutEjCsv,
    allAdditionalCsv,
  } = data;

  if (!doRequiredFilesExist(allFile)) {
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
        reduceHarm: allReduceHarmCsv.edges[index],
        institutEj: allInstitutEjCsv.edges[index],
        additional: allAdditionalCsv.edges[index],
      },
    });
  });
};
