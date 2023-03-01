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
            For the first time in our nation’s history, the Federal government
            has made it a goal that 40 percent of the overall benefits of
            certain Federal investments flow to
            {` `}
            <a
              className="usa-link usa-link--alt usa-link--external"
              href={`https://screeningtool.geoplatform.gov/en/#3/33.47/-97.5`}
              target="_blank"
              rel="noreferrer"
            >
              disadvantaged communities
            </a>
            {` `}
            that are marginalized, underserved, and overburdened by pollution.
            The following reflects the historic resources available to
            communities in Fiscal Year 2022 to implement the Justice40
            Initiative. Please visit this page for more information about the
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
            and visit
            {` `}
            <a
              className="usa-link usa-link--alt usa-link--external"
              href={agencyData.J40_URLLINK}
              target="_blank"
              rel="noreferrer"
            >
              {agencyData.J40_URLTXT}
            </a>
            .
          </p>

          {agencyData.A_EMAIL ? (
            <p>
              {`
          The goal of 40 percent of overall benefits refers to all covered programs under the Justice40 Initiative. Information about how these programs will identify and track benefits will be shared in the Phase Two Environmental Justice Scorecard. For more information about the benefits of the covered programs in this agency, please contact ${agencyData.A_EMAIL}.
          `}
            </p>
          ) : (
            <p>
              {`
          The goal of 40 percent of overall benefits refers to all covered programs under the Justice40 Initiative. Information about how these programs will identify and track benefits will be shared in the Phase Two Environmental Justice Scorecard.
          `}
            </p>
          )}
          <ul className={`bullet1`}>
            {agencyData.J40_TCP !== `` && (
              <li>
                <strong>{agencyData.J40_TCP}</strong> Justice40 covered programs
              </li>
            )}
            {agencyData.J40_ANNOUNCE !== `` && (
              <li>
                <strong>{agencyData.J40_ANNOUNCE}</strong>
                {` `}
                announcements in Fiscal Year 2022
              </li>
            )}
            {agencyData.J40_AMOUNT !== `` && (
              <li>
                <strong>{agencyData.J40_AMOUNT}</strong> funding that is
                available to benefit communities **add footnote, that the
                funding amounts include annual discretionary and mandatory
                appropriations, Inflation Reduction Act, and Bipartisan
                Infrastructure Law funding
              </li>
            )}
            <ul>
              <li>{agencyData.J40_E1}</li>
              <li>{agencyData.J40_E2}</li>
              <li>{agencyData.J40_E3}</li>
            </ul>
            <li>
              Made program modifications for Justice40 covered programs such as:
            </li>
            <ul>
              <li>{agencyData.J40_MOD1}</li>
              <li>{agencyData.J40_MOD2}</li>
              <li>{agencyData.J40_MOD3}</li>
            </ul>
          </ul>
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          <SummaryBox>
            <SummaryBoxHeading headingLevel="h3">
              {`${agencyData.A_NAME} Justice40 highlights`}
            </SummaryBoxHeading>
            <SummaryBoxContent>{agencyData.J40_HIGH}</SummaryBoxContent>
          </SummaryBox>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection1;
