import React from 'react';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { ScorecardTemplateProps } from '@/types';
import DeliverInvest from '@/components/DeliverInvest';
import ReduceHarm from '@/components/ReduceHarm';

const ScorecardTemplate: React.FC<ScorecardTemplateProps> = ({
  pageContext,
}) => {
  const {
    allAgencyNames,
    pathname,
    agencyInfo,
    deliverInvest,
    reduceHarm,
    // institutEj,
    // addtional,
  } = pageContext;

  return (
    <Layout
      pathname={pathname}
      title={agencyInfo.Name}
      allAgencyNames={allAgencyNames}
    >
      <MainGridContainer>
        <h1>{agencyInfo.Name}</h1>
        <AgencyInfo
          info={agencyInfo}
          allAgencyNames={allAgencyNames}
          pathname={pathname}
        />
        <DeliverInvest deliverInvest={deliverInvest} />
        <ReduceHarm reduceHarm={reduceHarm} />
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
