import { Grid } from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';

interface IIndexPage {
  location: Location;
}

const IndexPage = ({ location }: IIndexPage) => {
  return (
    <Layout location={location} title={`EJ Landing page`}>
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

export default IndexPage;
