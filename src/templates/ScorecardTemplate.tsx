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
  const { allAgencyNames, pathname, agencyData, gatsbyImageData } = pageContext;

  return (
    <Layout
      pathname={pathname}
      title={agencyData.A_NAME}
      allAgencyNames={allAgencyNames}
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
