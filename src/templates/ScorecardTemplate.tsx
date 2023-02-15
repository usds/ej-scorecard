import React from 'react';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { ScorecardTemplateProps } from '@/types';
// import DeliverInvest from '@/components/DeliverInvest';
// import ReduceHarm from '@/components/ReduceHarm';
// import InstitutionEJ from '@/components/InstitutionEJ';
// import AdditionalDetails from '@/components/AdditionalDetails';

const ScorecardTemplate: React.FC<ScorecardTemplateProps> = ({
  pageContext,
}) => {
  const { allAgencyNames, pathname, agencyInfo, gatsbyImageData } = pageContext;

  return (
    <Layout
      pathname={pathname}
      title={agencyInfo.A_NAME}
      allAgencyNames={allAgencyNames}
    >
      <MainGridContainer>
        <h1>{agencyInfo.A_NAME}</h1>
        <AgencyInfo
          info={agencyInfo}
          allAgencyNames={allAgencyNames}
          pathname={pathname}
          gatsbyImageData={gatsbyImageData}
        />
        {/* <DeliverInvest deliverInvest={deliverInvest} />
        <ReduceHarm reduceHarm={reduceHarm} />
        <InstitutionEJ institutEj={institutEj} />
        <AdditionalDetails additional={additional} /> */}
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
