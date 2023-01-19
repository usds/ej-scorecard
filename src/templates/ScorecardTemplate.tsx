import React from 'react';
import { Grid } from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { ScorecardTemplateProps } from '@/types';

const ScorecardTemplate: React.FC<ScorecardTemplateProps> = ({
  pageContext,
}) => {
  const { allAgencyNames, pathname, agencyInfo, deliverInvest } = pageContext;

  return (
    // location prop is not available during SSR, so removing
    <Layout
      pathname={pathname}
      title={agencyInfo.Name}
      allAgencyNames={allAgencyNames}
    >
      <MainGridContainer>
        <h1>{agencyInfo.Name}</h1>
        <Grid row gap>
          <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
            {/* // Todo: remove di prop */}
            <AgencyInfo info={agencyInfo} di={deliverInvest} />
          </Grid>
        </Grid>
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
