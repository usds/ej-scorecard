import React from 'react';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { ScorecardTemplateProps } from '@/types';
import TemplateSection1 from '@/components/TemplateSection1';
import TemplateSection2 from '@/components/TemplateSection2';
import TemplateSection3 from '@/components/TemplateSection3';

const ScorecardTemplate: React.FC<ScorecardTemplateProps> = ({
  pageContext,
}) => {
  const {
    allAgencyNames,
    allAgencyNamesWithAcronym,
    pathname,
    agencyData,
    gatsbyImageData,
  } = pageContext;

  console.log(allAgencyNamesWithAcronym);
  return (
    <Layout
      pathname={pathname}
      title={`${agencyData.A_NAME} Environmental Justice Scorecard`}
      allAgencyNames={allAgencyNames}
      description={`Learn more about how ${agencyData.A_NAME} is making efforts to meet Federal environmental justice goals and improve the lived experiences of communities impacted by environmental justice.`}
      keywords={`${agencyData.A_NAME}, ${agencyData.A_NAME} environmental justice`}
    >
      <MainGridContainer>
        <h1>{agencyData.A_NAME}</h1>
        <AgencyInfo
          agencyData={agencyData}
          allAgencyNames={allAgencyNames}
          pathname={pathname}
          gatsbyImageData={gatsbyImageData}
        />
        <TemplateSection1 agencyData={agencyData} />
        <TemplateSection2 agencyData={agencyData} />
        <TemplateSection3 agencyData={agencyData} />
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
