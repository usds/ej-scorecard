import { graphql } from 'gatsby';
import { Grid } from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import { PAGE_ENDPOINTS } from '@/data/constants';
import { IPageProps } from '@/types';

const IndexPage = ({ data }: IPageProps) => {
  return (
    <Layout
      pathname={PAGE_ENDPOINTS[0]}
      title={`EJ Landing page`}
      allAgencyNames={data.allAgencyInfoCsv.edges.map((edge) => edge.node.Name)}
    >
      <MainGridContainer>
        <h1>{`EJ Landing page`}</h1>
        <Grid row gap>
          <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
            {`EJ Landing page`}
          </Grid>
        </Grid>
      </MainGridContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    allAgencyInfoCsv(sort: { Name: ASC }) {
      totalCount
      edges {
        node {
          Name
        }
      }
    }
  }
`;

export default IndexPage;
