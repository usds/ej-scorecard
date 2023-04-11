import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

// import * as styles from './TemplateSection2.module.scss';

import { TemplateSectionProps } from '@/types';

const TemplateSection2: React.FC<TemplateSectionProps> = ({ agencyData }) => {
  return (
    <>
      <Grid row gap={6}>
        {agencyData.ECR_HIGH && (
          <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}></Grid>
        )}
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2 className={`scorecard-header2`}>
            Environmental and Civil Rights Protection
          </h2>
        </Grid>
      </Grid>
      <Grid row gap={6}>
        {agencyData.ECR_HIGH && (
          <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
            <SummaryBox>
              <SummaryBoxHeading headingLevel="h3">
                {`${agencyData.A_ACRONYM} Environmental and Civil Rights highlights`}
              </SummaryBoxHeading>
              <SummaryBoxContent>{agencyData.ECR_HIGH}</SummaryBoxContent>
            </SummaryBox>
          </Grid>
        )}
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          {agencyData.A_STRATPLANLINK !== `` ? (
            <p className={`margin-top-0`}>
              Federal agencies are advancing environmental justice by carrying
              out their responsibilities under the law to identify and address
              disproportionate and adverse human health, environmental,
              climate-related and other cumulative impacts on disadvantaged
              communities, and to ensure that all communities experience the
              protection of our nation’s bedrock environmental laws. The
              following information summarizes some of the work the agency has
              done from January 2021 to September 2022 in these areas. For more
              information, please visit{` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={agencyData.A_STRATPLANLINK}
              >
                {agencyData.A_STRATPLANTXT}
              </a>
              .
            </p>
          ) : (
            <p className={`margin-top-0`}>
              Federal agencies are advancing environmental justice by carrying
              out their responsibilities under the law to identify and address
              disproportionate and adverse human health, environmental,
              climate-related and other cumulative impacts on disadvantaged
              communities, and to ensure that all communities experience the
              protection of our nation’s bedrock environmental laws. The
              following information summarizes some of the work the agency has
              done from January 2021 to September 2022 in these areas.
            </p>
          )}
          <h3>Centering Justice in Decision-making</h3>

          <p>
            {`
            Federal agencies are working to ensure that the voices, perspectives, and lived
            experiences of the environmental justice communities are heard and reflected in the priorities, policies, investments, and decision-making of the Federal government. The following information summarizes some of the work ${agencyData.THE_A_NAME} did from January 2021 to September 2022 to center environmental justice in its decision-making.
            `}
          </p>

          <h4>National Environmental Policy Act</h4>
          <p>
            The National Environmental Policy Act (NEPA) requires Federal
            agencies to consider and disclose the environmental, health, and
            community impacts of a decision or planned action before taking it.
            Environmental reviews that agencies conduct through NEPA help ensure
            the public is informed about the Federal government’s potential
            actions, that communities have an opportunity to fully and fairly
            participate in the government’s decision-making process, and that
            Federal agencies consider ways to protect and enhance the quality of
            the human environment and advance environmental justice in
            decision-making.
          </p>

          {(agencyData.A_NEPA ||
            agencyData.NUM_NEPA ||
            agencyData.NEPA_TRAIN) && (
            <p>
              <strong>
                Phase One Scorecard metrics and highlights include:
              </strong>
            </p>
          )}
          <ul className={`bullet1`}>
            {agencyData.A_NEPA && <li>{agencyData.A_NEPA}</li>}
            {agencyData.NUM_NEPA && (
              <li>
                <strong>{agencyData.NUM_NEPA}</strong> project modifications
                where environmental justice concerns were raised during the NEPA
                process
              </li>
            )}
            <ul>
              {agencyData.NEPA_H1 && <li>{agencyData.NEPA_H1}</li>}
              {agencyData.NEPA_H2 && <li>{agencyData.NEPA_H2}</li>}
              {agencyData.NEPA_H3 && <li>{agencyData.NEPA_H3}</li>}
            </ul>

            {agencyData.NEPA_TRAIN && (
              <li>
                <strong>{agencyData.NEPA_TRAIN}</strong> trainings on
                environmental justice considerations during NEPA reviews
              </li>
            )}
          </ul>

          <h3>
            Title VI of the Civil Rights Act of 1964 and Environmental Justice
          </h3>
          <p>
            Title VI of the Civil Rights Act of 1964 requires that no person be
            excluded from participation in, be denied the benefits of, or be
            subject to discrimination under any program or activity receiving
            Federal financial assistance on account of their race, color or
            national origin. Title VI requires Federal agencies to ensure that
            programs or activities receiving Federal funding, including those
            that affect human health or the environment, do not use
            discriminatory criteria, methods, or practices. The following
            includes updates from <strong>{agencyData.THE_A_NAME}</strong> on
            Title VI that are related to environmental justice.
          </p>
          <p></p>

          {(agencyData.TITLEVI_NAR ||
            agencyData.TITLEVI_N ||
            agencyData.TITLEVI_CR_EJ ||
            agencyData.TITLEVI_R_N) && (
            <p>
              <strong>
                Phase One Scorecard metrics and highlights include:
              </strong>
            </p>
          )}
          <ul className={`bullet1`}>
            {agencyData.TITLEVI_NAR && <li>{agencyData.TITLEVI_NAR}</li>}
            {agencyData.TITLEVI_N && (
              <li>
                <strong>{agencyData.TITLEVI_N}</strong> open Title VI or
                complaints related to environmental justice from January 2021 to
                September 2022
              </li>
            )}
            {agencyData.TITLEVI_R_N && (
              <li>
                <strong>{agencyData.TITLEVI_R_N}</strong> closed Title VI
                compliance reviews or resolution agreements related to
                environmental justice from January 2021 to September 2022
              </li>
            )}
            {agencyData.TITLEVI_CR_EJ && (
              <li>
                <strong>{agencyData.TITLEVI_CR_EJ}</strong> Title VI civil
                rights and environmental justice training
              </li>
            )}
          </ul>
          <h3>Centering Justice in Decision-making</h3>
          <p>
            Federal agencies are working to ensure that the voices,
            perspectives, and lived experiences of environmental justice
            communities are heard and reflected in the priorities, policies,
            investments, and decision-making of the Federal government. The
            following information summarizes some of the work{` `}
            <strong>{agencyData.THE_A_NAME}</strong> did from January 2021 to
            September 2022 to center environmental justice in its
            decision-making.
          </p>

          <h3>Community Input and Engagement</h3>

          {(agencyData.A_NAR || agencyData.TA_N || agencyData.PP_N) && (
            <p>
              <strong>
                Phase One Scorecard metrics and highlights include:
              </strong>
            </p>
          )}

          <ul className={`bullet1`}>
            {agencyData.A_NAR && <li>{agencyData.A_NAR}</li>}
            {agencyData.TA_N && (
              <li>
                <strong>{agencyData.TA_N}</strong> technical assistance outreach
                events in Fiscal Year 2022
              </li>
            )}
            <ul>
              {agencyData.TA_E1 && <li>{agencyData.TA_E1}</li>}
              {agencyData.TA_E2 && <li>{agencyData.TA_E2}</li>}
              {agencyData.TA_E3 && <li>{agencyData.TA_E3}</li>}
            </ul>
            {agencyData.PP_N && (
              <li>
                <strong>{agencyData.PP_N}</strong> public processes related to
                EJ, e.g. RFIs or listening sessions
              </li>
            )}
            <ul>
              {agencyData.PP_E1 && <li>{agencyData.PP_E1}</li>}
              {agencyData.PP_E2 && <li>{agencyData.PP_E2}</li>}
              {agencyData.PP_E3 && <li>{agencyData.PP_E3}</li>}
            </ul>
          </ul>

          <h3>Consultation and Partnership with Tribal Nations</h3>

          {(agencyData.TC_NAR ||
            agencyData.TC_E1 ||
            agencyData.TC_E2 ||
            agencyData.TC_E3) && (
            <p>
              <strong>
                Phase One Scorecard metrics and highlights include:
              </strong>
            </p>
          )}

          <ul className={`bullet1`}>
            {agencyData.TC_NAR && <li>{agencyData.TC_NAR}</li>}
            {agencyData.TC_N && (
              <li>
                <strong>{agencyData.TC_N}</strong> Tribal Consultations related
                to environmental justice from January 2021 to September 2022
              </li>
            )}
            <ul>
              {agencyData.TC_E1 && <li>{agencyData.TC_E1}</li>}
              {agencyData.TC_E2 && <li>{agencyData.TC_E2}</li>}
              {agencyData.TC_E3 && <li>{agencyData.TC_E3}</li>}
            </ul>
            {agencyData.TC_TRAIN_N && (
              <li>
                <strong>{agencyData.TC_TRAIN_N}</strong> trainings on Tribal
                Consultations or working with Tribes and Indigenous Peoples to
                advance environmental justice
              </li>
            )}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection2;
