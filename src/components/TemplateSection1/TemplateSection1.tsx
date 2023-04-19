import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';
// import * as styles from './TemplateSection1.module.scss';

import { TemplateSectionProps } from '@/types';
import { DELIMITERS } from '@/data/constants';
import { possessivePlural, splitTextIntoParagraphs } from '../util';

const TemplateSection1: React.FC<TemplateSectionProps> = ({ agencyData }) => {
  const {
    A_EMAIL,
    A_ACRONYM,
    THE_A_NAME,
    J40_TCP,
    J40_ANNOUNCE,
    J40_AMOUNT,
    J40_MOD1,
    J40_MOD2,
    J40_MOD3,
    J40_E1,
    J40_E2,
    J40_E3,
    J40_HIGH,
  } = agencyData;

  return (
    <>
      <Grid row>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2 className={`scorecard-header2`}>Justice40 Initiative</h2>
        </Grid>
      </Grid>
      <Grid row gap={6}>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <p className={`margin-top-0`}>
            As part of President Biden’s
            {` `}
            <a
              className="usa-link usa-link--alt usa-link--external"
              href={`https://www.whitehouse.gov/environmentaljustice/justice40/`}
              target="_blank"
              rel="noreferrer"
            >
              Justice40 Initiative
            </a>
            {` `}, the federal government is working toward the goal that 40
            percent of the overall benefits of certain federal investments reach
            disadvantaged communities that are marginalized and overburdened by
            pollution and underinvestment. In particular, the President’s
            Justice40 Initiative applies to federal investments that address
            climate change, clean energy and energy efficiency, clean transit,
            affordable and sustainable housing, training and workforce
            development, remediation and reduction of legacy pollution, and the
            development of critical clean water and wastewater infrastructure.
          </p>

          <p>
            This Phase One Scorecard provides an update on initial progress made
            by <strong>{THE_A_NAME}</strong> in implementing the Justice40
            Initiative. Future versions of the Environmental Justice Scorecard
            will provide additional information and updates on the benefits of
            Justice40 covered programs.
          </p>

          {A_EMAIL && (
            <p>
              For more information on {agencyData.A_ACRONYM}’s Justice40 covered
              programs, please contact
              {` `}
              <a href={`mailto:${A_EMAIL}`} target="_blank" rel="noreferrer">
                {A_EMAIL}
              </a>
              {` `}.
            </p>
          )}

          <div>
            Phase One Scorecard metrics and highlights in Fiscal Year 2022
            include:
          </div>

          <ul className={`bullet1`}>
            {J40_TCP && (
              <li>
                <strong>{J40_TCP}</strong> Justice40 covered program(s)
              </li>
            )}
            {J40_ANNOUNCE && (
              <li>
                <strong>{J40_ANNOUNCE}</strong>
                {` `}
                funding announcement(s) covered under the Justice40 Initiative
              </li>
            )}
            {J40_AMOUNT && (
              <li>
                <strong>{J40_AMOUNT}</strong> in funding made available from
                Justice40 covered programs
                <sup>1</sup>
              </li>
            )}
            <ul>
              {J40_E1 && <li>{J40_E1}</li>}
              {J40_E2 && <li>{J40_E2}</li>}
              {J40_E3 && <li>{J40_E3}</li>}
            </ul>
            {(J40_MOD1 || J40_MOD2 || J40_MOD3) && (
              <>
                <li>
                  Made program modifications for Justice40 covered programs such
                  as:
                </li>
                <ul>
                  {J40_MOD1 && <li>{J40_MOD1}</li>}
                  {J40_MOD2 && <li>{J40_MOD2}</li>}
                  {J40_MOD3 && <li>{J40_MOD3}</li>}
                </ul>
              </>
            )}
          </ul>

          {J40_AMOUNT && (
            <p>
              <sup>1</sup> This funding amount describes examples of the funding
              that was made available in Fiscal Year 2022 through Justice40
              covered programs. The amount does not represent the total funding
              that benefits disadvantaged communities. The funding was made
              available through grants, notices of funding opportunity, and
              other funding announcements. These funding announcements were from
              Justice40 covered programs that were funded through discretionary
              and mandatory appropriations, as well as supplemental
              appropriations, such as those enacted under the Bipartisan
              Infrastructure Law (Pub. L. 117-58). The Justice40 Initiative sets
              a goal that 40 percent of overall benefits from certain federal
              investments flow to disadvantaged communities.
            </p>
          )}
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          {J40_HIGH && (
            <SummaryBox>
              <SummaryBoxHeading headingLevel="h3">
                {`${possessivePlural(A_ACRONYM)} highlights`}
              </SummaryBoxHeading>
              <SummaryBoxContent>
                {agencyData.J40_HIGH.includes(DELIMITERS.PARAGRAPH)
                  ? splitTextIntoParagraphs(
                      agencyData.J40_HIGH,
                      DELIMITERS.PARAGRAPH,
                    ).map((paragraph) => paragraph)
                  : agencyData.J40_HIGH}
              </SummaryBoxContent>
            </SummaryBox>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection1;
