import type { GatsbyNode } from 'gatsby';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

function checkRelativePaths(obj: any): boolean {
  const files = [`AgencyInfo.csv`, `DeliverInvest.csv`];
  for (const edge of obj.data.allFile.edges) {
    if (!files.includes(edge.node.relativePath)) {
      return false;
    }
  }
  return true;
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const relativePaths = await graphql(
    `
      query {
        allFile(sort: { relativePath: ASC }) {
          edges {
            node {
              relativePath
            }
          }
        }
      }
    `,
  );

  // Check to see if scorecard files exist in the expected location
  if (!checkRelativePaths(relativePaths)) {
    throw Error(`Was not able to read in required data`);
  } else {
    // Todo: consider destructuring result
    // Todo: consider adding url path to info file
    // Todo: see if there's a way to use fragments to break up massive query
    const result = await graphql(
      `
        query {
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

    result.data.allAgencyInfoCsv.edges.forEach((edge, index) => {
      createPage({
        adjustPath: true,
        path: `scorecard/${edge.node.Name.toLowerCase().split(` `).join(`-`)}`,
        component: path.resolve(`./src/templates/ScorecardTemplate.tsx`),
        context: {
          agencyInfo: edge.node,
          deliverInvest: result.data.allDeliverInvestCsv.edges[index],
        },
      });
    });
  }
};
