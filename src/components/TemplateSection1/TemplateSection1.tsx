import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';
// import * as styles from './TemplateSection1.module.scss';

import { TemplateSectionProps } from '@/types';

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
            As part of President Biden’s Justice40 Initiative, the Federal
            government is working to ensure that 40 percent of the overall
            benefits of certain Federal investments reach disadvantaged
            communities that are marginalized, underserved, and overburdened by
            pollution. In particular, the President’s
            {` `}
            <a
              className="usa-link usa-link--alt usa-link--external"
              href={`https://ceq.sites.eop.gov/ceqej/Shared%20Documents/Scorecard/Template/whitehouse.gov/environmentaljustice/justice40`}
              target="_blank"
              rel="noreferrer"
            >
              Justice40 Initiative
            </a>
            {` `}
            applies to Federal investments in climate change, clean energy and
            energy efficiency, clean transit, affordable and sustainable
            housing, training and workforce development, remediation and
            reduction of legacy pollution, and the development of critical clean
            water and wastewater infrastructure.
          </p>

          {A_EMAIL && (
            <p>
              Contact
              {` `}
              <a href={`mailto:${A_EMAIL}`} target="_blank" rel="noreferrer">
                {A_EMAIL}
              </a>
              {` `}
              for more information.
            </p>
          )}

          <p>
            {`
              This Phase One Scorecard provides an update on initial progress made by ${THE_A_NAME} in implementing the Justice40 Initiative. Future versions of the Environmental Justice Scorecard will provide additional information and updates on the benefits of Justice40 covered programs.
          `}
          </p>

          {(J40_TCP ||
            J40_ANNOUNCE ||
            J40_AMOUNT ||
            J40_MOD1 ||
            J40_MOD2 ||
            J40_MOD3) && (
            <div>Phase one Scorecard metrics and highligts include:</div>
          )}

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
                <sup>1</sup>
              </li>
            )}
            {J40_AMOUNT && (
              <li>
                <strong>{J40_AMOUNT}</strong> of funding made available from
                covered programs
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

          {J40_ANNOUNCE && (
            <p>
              <sup>1</sup> Infrastructure Law (Pub. L. 117-58) for a covered
              program, which may include program implementation and 1 oversight
              funding in addition to funding available to disadvantaged
              communities. The Justice40 Initiative is measured as 40 percent of
              total benefits being directed to disadvantaged communities, not 40
              percent of total program funding.
            </p>
          )}
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          {J40_HIGH && (
            <SummaryBox>
              <SummaryBoxHeading headingLevel="h3">
                {`${A_ACRONYM} Justice40 highlights`}
              </SummaryBoxHeading>
              <SummaryBoxContent>{J40_HIGH}</SummaryBoxContent>
            </SummaryBox>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection1;
