import React from 'react';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { ScorecardTemplateProps } from '@/types';
import DeliverInvest from '@/components/DeliverInvest';

const ScorecardTemplate: React.FC<ScorecardTemplateProps> = ({
  pageContext,
}) => {
  const { allAgencyNames, pathname, agencyInfo, deliverInvest } = pageContext;

  return (
    <Layout
      pathname={pathname}
      title={agencyInfo.Name}
      allAgencyNames={allAgencyNames}
    >
      <MainGridContainer>
        <h1>{agencyInfo.Name}</h1>
        <AgencyInfo info={agencyInfo} />
        <DeliverInvest deliverInvest={deliverInvest} />
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
