import { useStaticQuery, graphql } from 'gatsby';

export const useGatsbyImageData = () => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          totalCount
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
  return allImageSharp;
};
