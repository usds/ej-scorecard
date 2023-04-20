import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import AgencyInfo from '@/components/AgencyInfo';
import { ScorecardTemplateProps } from '@/types';
import TemplateSection1 from '@/components/TemplateSection1';
import TemplateSection2 from '@/components/TemplateSection2';
import TemplateSection3 from '@/components/TemplateSection3';
import AppBreadcrumb from '@/components/AppBreadcrumb';
import { toKebabCase } from '@/components/util';

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

  // Todo: remove this prop
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
        <h1>
          <AppBreadcrumb agencyName={agencyData.A_NAME} />
        </h1>
        <AgencyInfo
          agencyData={agencyData}
          allAgencyNames={allAgencyNames}
          pathname={pathname}
          gatsbyImageData={gatsbyImageData}
        />

        {(agencyData.J40_TCP ||
          agencyData.J40_ANNOUNCE ||
          agencyData.J40_AMOUNT ||
          agencyData.J40_E1 ||
          agencyData.J40_E2 ||
          agencyData.J40_E3 ||
          agencyData.J40_MOD1 ||
          agencyData.J40_MOD2 ||
          agencyData.J40_MOD3) && <TemplateSection1 agencyData={agencyData} />}

        {(agencyData.A_NEPA ||
          agencyData.NUM_NEPA ||
          agencyData.NEPA_H1 ||
          agencyData.NEPA_H2 ||
          agencyData.NEPA_H3 ||
          agencyData.NEPA_TRAIN ||
          agencyData.TITLEVI_NAR ||
          agencyData.TITLEVI_N ||
          agencyData.TITLEVI_R_N ||
          agencyData.TITLEVI_CR_EJ ||
          agencyData.A_NAR ||
          agencyData.TA_N ||
          agencyData.TA_E1 ||
          agencyData.TA_E2 ||
          agencyData.TA_E3 ||
          agencyData.PP_N ||
          agencyData.PP_E1 ||
          agencyData.PP_E2 ||
          agencyData.PP_E3 ||
          agencyData.TC_NAR ||
          agencyData.TC_N ||
          agencyData.TC_E1 ||
          agencyData.TC_E2 ||
          agencyData.TC_E3 ||
          agencyData.TC_TRAIN_N) && (
          <TemplateSection2 agencyData={agencyData} />
        )}

        {(agencyData.PLAN_BOOL ||
          agencyData.EJTOOL_N ||
          agencyData.EJSTAFF_N ||
          agencyData.EJTRAIN_N ||
          agencyData.EJ_OFFICE ||
          agencyData.EJWG_N ||
          agencyData.EJP_NAR) && <TemplateSection3 agencyData={agencyData} />}

        <Grid row className="return-top">
          <Grid col={1} offset={11}>
            <Link
              className={`usa-link`}
              to={`/scorecard/${toKebabCase(agencyData.A_NAME)}`}
            >
              Return to top
            </Link>
          </Grid>
        </Grid>
      </MainGridContainer>
    </Layout>
  );
};

export default ScorecardTemplate;
