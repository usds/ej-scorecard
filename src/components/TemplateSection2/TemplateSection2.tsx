import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

// import * as styles from './TemplateSection2.module.scss';

import { TemplateSectionProps } from '@/types';
import { possessivePlural, splitTextIntoParagraphs } from '../util';
import { DELIMITERS } from '@/data/constants';

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
                {`${possessivePlural(agencyData.A_ACRONYM)} Highlights`}
              </SummaryBoxHeading>
              <SummaryBoxContent>
                {agencyData.ECR_HIGH.includes(DELIMITERS.PARAGRAPH)
                  ? splitTextIntoParagraphs(
                      agencyData.ECR_HIGH,
                      DELIMITERS.PARAGRAPH,
                    ).map((paragraph) => paragraph)
                  : agencyData.ECR_HIGH}
              </SummaryBoxContent>
            </SummaryBox>
          </Grid>
        )}
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <p className={`margin-top-0`}>
            Federal agencies are advancing environmental justice by carrying out
            their responsibilities under the law to identify and address
            disproportionate and adverse public health and environmental,
            climate-related, and cumulative impacts on communities with
            environmental justice concerns. Agencies are working to ensure that
            all communities experience the protection of our country’s bedrock
            environmental laws. The following information reflects some of the
            environmental and civil rights work{` `}
            <strong>{agencyData.THE_A_NAME}</strong>
            {` `}
            has done from January 2021 to September 2022.
          </p>

          {agencyData.A_STRATPLANLINK && (
            <p>
              For more information, please visit
              {` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={agencyData.A_STRATPLANLINK}
              >
                {agencyData.A_STRATPLANTXT}
              </a>
              .
            </p>
          )}

          {/* NEPA section is dependent on at least one NEPA metric being defined */}
          {(agencyData.A_NEPA ||
            agencyData.NUM_NEPA ||
            agencyData.NEPA_TRAIN) && (
            <>
              <h3>National Environmental Policy Act</h3>
              <p>
                The National Environmental Policy Act (NEPA) requires federal
                agencies to consider and disclose the environmental, health, and
                community impacts of certain decisions or actions before taking
                them. Environmental reviews help ensure the public is informed
                about potential actions, and give communities an opportunity to
                participate in the government’s decision-making process.
                Environmental reviews also ensure that federal agencies consider
                ways to protect and enhance public health and the environment,
                and advance environmental justice in their decision-making. The
                following information highlights some work{` `}
                <strong>{agencyData.THE_A_NAME}</strong>
                {` `}
                has done from January 2021 to September 2022.
              </p>
              <p>Phase One Scorecard metrics and highlights include:</p>
              <ul className={`bullet1`}>
                {agencyData.A_NEPA && <li>{agencyData.A_NEPA}</li>}
                {agencyData.NUM_NEPA && (
                  <li>
                    <strong>{agencyData.NUM_NEPA}</strong> project
                    modification(s) where environmental justice concerns were
                    raised during the NEPA process
                  </li>
                )}
                <ul>
                  {agencyData.NEPA_H1 && <li>{agencyData.NEPA_H1}</li>}
                  {agencyData.NEPA_H2 && <li>{agencyData.NEPA_H2}</li>}
                  {agencyData.NEPA_H3 && <li>{agencyData.NEPA_H3}</li>}
                </ul>

                {agencyData.NEPA_TRAIN && (
                  <li>
                    <strong>{agencyData.NEPA_TRAIN}</strong> training(s) on
                    environmental justice considerations during NEPA reviews
                  </li>
                )}
              </ul>
            </>
          )}

          {/* TITLEVI section requires at least one TITLEVI metric */}
          {(agencyData.TITLEVI_NAR ||
            agencyData.TITLEVI_N ||
            agencyData.TITLEVI_CR_EJ ||
            agencyData.TITLEVI_R_N) && (
            <>
              <h3>
                Title VI of the Civil Rights Act of 1964 and Environmental
                Justice
              </h3>
              <p>
                Title VI of the Civil Rights Act of 1964 requires that no person
                be excluded from participation in, be denied the benefits of, or
                be subject to discrimination under any program or activity
                receiving federal financial assistance on account of race,
                color, or national origin. Title VI requires federal agencies to
                ensure that programs or activities receiving federal funding,
                including those that affect human health or the environment, do
                not use discriminatory criteria, methods, or practices. The
                following information includes updates from January 2021 to
                September 2022 from <strong>{agencyData.THE_A_NAME}</strong> on
                Title VI that are related to environmental justice.
              </p>
              <p></p>

              <p>Phase One Scorecard metrics and highlights include:</p>
              <ul className={`bullet1`}>
                {agencyData.TITLEVI_NAR && <li>{agencyData.TITLEVI_NAR}</li>}
                {agencyData.TITLEVI_N && (
                  <li>
                    <strong>{agencyData.TITLEVI_N}</strong> open Title VI
                    investigation(s) or compliance review(s) related to
                    environmental justice
                  </li>
                )}
                {agencyData.TITLEVI_R_N && (
                  <li>
                    <strong>{agencyData.TITLEVI_R_N}</strong> closed Title VI
                    compliance review(s) or resolution agreement(s) related to
                    environmental justice
                  </li>
                )}
                {agencyData.TITLEVI_CR_EJ && (
                  <li>
                    <strong>{agencyData.TITLEVI_CR_EJ}</strong> internal
                    training(s) on Title VI civil rights and environmental
                    justice
                  </li>
                )}
              </ul>
            </>
          )}

          {/* Centering Justice section will require all fields from Community Input and Tribal Nations */}
          {(agencyData.A_NAR ||
            agencyData.TA_N ||
            agencyData.PP_N ||
            agencyData.TC_NAR ||
            agencyData.TC_E1 ||
            agencyData.TC_E2 ||
            agencyData.TC_E3) && (
            <>
              <h3>Centering Environmental Justice in Decision-Making</h3>
              <p>
                Federal agencies work to ensure that the voices, perspectives,
                and lived experiences of communities are heard and reflected in
                the priorities, policies, and decision-making of the federal
                government. Agencies also take steps to respect Tribal
                sovereignty and ensure government-to-government consultation on
                federal policies. The following information highlights work{` `}
                <strong>{agencyData.THE_A_NAME}</strong> has done from January
                2021 to September 2022 to center environmental justice in its
                decision-making.
              </p>
            </>
          )}

          {/* Community Input requires at least one metric (A_NAR, TA_N or PP_N) */}
          {(agencyData.A_NAR || agencyData.TA_N || agencyData.PP_N) && (
            <>
              <h4>Community Input and Engagement</h4>
              <p>Phase One Scorecard metrics and highlights include:</p>
            </>
          )}
          <ul className={`bullet1`}>
            {agencyData.A_NAR && <li>{agencyData.A_NAR}</li>}
            {agencyData.TA_N && (
              <li>
                <strong>{agencyData.TA_N}</strong> technical assistance outreach
                event(s) in Fiscal Year 2022
              </li>
            )}
            <ul>
              {agencyData.TA_E1 && <li>{agencyData.TA_E1}</li>}
              {agencyData.TA_E2 && <li>{agencyData.TA_E2}</li>}
              {agencyData.TA_E3 && <li>{agencyData.TA_E3}</li>}
            </ul>
            {agencyData.PP_N && (
              <li>
                <strong>{agencyData.PP_N}</strong> public process(es) related to
                environmental justice, e.g., requests for information or
                listening sessions
              </li>
            )}
            <ul>
              {agencyData.PP_E1 && <li>{agencyData.PP_E1}</li>}
              {agencyData.PP_E2 && <li>{agencyData.PP_E2}</li>}
              {agencyData.PP_E3 && <li>{agencyData.PP_E3}</li>}
            </ul>
          </ul>

          {/* Tribal Nations section requires at least one TC metric */}
          {(agencyData.TC_NAR ||
            agencyData.TC_E1 ||
            agencyData.TC_E2 ||
            agencyData.TC_E3) && (
            <>
              <h4>Consultation and Partnership with Tribal Nations</h4>
              <p>Phase One Scorecard metrics and highlights include:</p>
            </>
          )}
          <ul className={`bullet1`}>
            {agencyData.TC_NAR && <li>{agencyData.TC_NAR}</li>}
            {agencyData.TC_N && (
              <li>
                <strong>{agencyData.TC_N}</strong> Tribal Consultation(s)
                related to environmental justice from January 2021 to September
                2022
              </li>
            )}
            <ul>
              {agencyData.TC_E1 && <li>{agencyData.TC_E1}</li>}
              {agencyData.TC_E2 && <li>{agencyData.TC_E2}</li>}
              {agencyData.TC_E3 && <li>{agencyData.TC_E3}</li>}
            </ul>
            {agencyData.TC_TRAIN_N && (
              <li>
                <strong>{agencyData.TC_TRAIN_N}</strong> internal training(s) on
                Tribal Consultation or working with Tribes and Indigenous
                Peoples to advance environmental justice
              </li>
            )}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection2;
