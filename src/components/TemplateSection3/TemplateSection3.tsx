import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';
// import * as styles from './TemplateSection3.module.scss';

import { TemplateSectionProps } from '@/types';
import { DELIMITERS } from '@/data/constants';
import { possessivePlural, splitTextIntoParagraphs } from '../util';

const TemplateSection3: React.FC<TemplateSectionProps> = ({ agencyData }) => {
  return (
    <>
      <Grid row>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2 className={`scorecard-header2`}>
            Institutionalizing Environmental Justice
          </h2>
        </Grid>
      </Grid>
      <Grid row gap={6}>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <p className={`margin-top-0`}>
            Since the start of the Biden-Harris Administration, federal agencies
            have been working to embed environmental justice into all aspects of
            their work, including by implementing
            {` `}
            <a
              className="usa-link usa-link--alt usa-link--external"
              href={`https://www.archives.gov/files/federal-register/executive-orders/pdf/12898.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              Executive Order 12898
            </a>
            {` `}
            and
            {` `}
            <a
              className="usa-link usa-link--alt usa-link--external"
              href={`https://www.federalregister.gov/documents/2021/02/01/2021-02177/tackling-the-climate-crisis-at-home-and-abroad#:~:text=Sec.%20223.%20Justice40,40-percent%20goal.`}
              target="_blank"
              rel="noreferrer"
            >
              Executive Order 14008
            </a>
            . The following information shares some of the work{` `}
            <strong>{agencyData.THE_A_NAME}</strong> has done from January 2021
            to September 2022 to institutionalize environmental justice.
          </p>

          <p>Phase One Scorecard metrics and highlights include:</p>

          <ul className={`bullet1`}>
            {agencyData.PLAN_BOOL && agencyData.PLAN_UPDATE && (
              <li>
                <strong>{agencyData.PLAN_BOOL}</strong> an environmental justice
                Strategic Plan that <strong>{agencyData.PLAN_UPDATE}</strong>
                {` `}
                updated in the past 5 years
              </li>
            )}
            <ul>
              {agencyData.EJP_E1 && <li>{agencyData.EJP_E1}</li>}
              {agencyData.EJP_E2 && <li>{agencyData.EJP_E2}</li>}
              {agencyData.EJP_E3 && <li>{agencyData.EJP_E3}</li>}
            </ul>
            {agencyData.EJTOOL_N && (
              <li>
                <strong>{agencyData.EJTOOL_N}</strong> environmental justice
                tool(s) or resource(s)
              </li>
            )}
            {agencyData.EJSTAFF_N && (
              <li>
                <strong>{agencyData.EJSTAFF_N}</strong> staff that work on
                environmental justice, either in a full- or part-time capacity
              </li>
            )}
            {agencyData.EJTRAIN_N && (
              <li>
                <strong>{agencyData.EJTRAIN_N}</strong> trainings for staff on
                environmental justice
              </li>
            )}
            {agencyData.EJ_OFFICE && (
              <li>
                <strong>{agencyData.EJ_OFFICE}</strong> new or strengthened
                office(s) on environmental justice
              </li>
            )}
            {agencyData.EJWG_N && (
              <li>
                <strong>{agencyData.EJWG_N}</strong> new or strengthened office
                internal working group(s)/steering committee(s)/council(s) on
                environmental justice{` `}
              </li>
            )}
            {agencyData.EJP_NAR && <li>{agencyData.EJP_NAR}</li>}
          </ul>
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          {agencyData.IEJ_HIGH && (
            <SummaryBox>
              <SummaryBoxHeading headingLevel="h3">
                {`${possessivePlural(
                  agencyData.A_ACRONYM,
                )} Institutionalizing Environmental Justice highlights`}
              </SummaryBoxHeading>
              <SummaryBoxContent>
                {agencyData.IEJ_HIGH.includes(DELIMITERS.PARAGRAPH)
                  ? splitTextIntoParagraphs(
                      agencyData.IEJ_HIGH,
                      DELIMITERS.PARAGRAPH,
                    ).map((paragraph) => paragraph)
                  : agencyData.IEJ_HIGH}
              </SummaryBoxContent>
            </SummaryBox>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection3;
