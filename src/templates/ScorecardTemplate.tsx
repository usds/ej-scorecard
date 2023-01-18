import React from 'react';
import { Grid } from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { IAgencyInfo, IDeliverInvest } from '@/types';

interface Props {
  pageContext: {
    agencyInfo: IAgencyInfo;
    deliverInvest: IDeliverInvest;
  };
}

const ScorecardTemplate: React.FC<Props> = ({ pageContext }) => {
  const agencyName = pageContext.agencyInfo.Name;

  return (
    // location prop is not available during SSR, so removing
    <Layout title={agencyName}>
      <MainGridContainer>
        <h1>{agencyName}</h1>
        <Grid row gap>
          <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
            {/* // Todo: remove di prop */}
            <AgencyInfo
              info={pageContext.agencyInfo}
              di={pageContext.deliverInvest}
            />
          </Grid>
        </Grid>
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
