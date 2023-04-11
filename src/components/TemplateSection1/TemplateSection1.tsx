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

          {agencyData.A_EMAIL && (
            <p>
              Contact
              {` `}
              <a
                href={`mailto:${agencyData.A_EMAIL}`}
                target="_blank"
                rel="noreferrer"
              >
                {agencyData.A_EMAIL}
              </a>
              {` `}
              for more information.
            </p>
          )}

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
              {agencyData.J40_E1 && <li>{agencyData.J40_E1}</li>}
              {agencyData.J40_E2 && <li>{agencyData.J40_E2}</li>}
              {agencyData.J40_E3 && <li>{agencyData.J40_E3}</li>}
            </ul>
            {(agencyData.J40_MOD1 !== `` ||
              agencyData.J40_MOD2 !== `` ||
              agencyData.J40_MOD3 !== ``) && (
              <>
                <li>
                  Made program modifications for Justice40 covered programs such
                  as:
                </li>
                <ul>
                  {agencyData.J40_MOD1 !== `` && <li>{agencyData.J40_MOD1}</li>}
                  {agencyData.J40_MOD2 !== `` && <li>{agencyData.J40_MOD2}</li>}
                  {agencyData.J40_MOD3 !== `` && <li>{agencyData.J40_MOD3}</li>}
                </ul>
              </>
            )}
          </ul>
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          {agencyData.J40_HIGH !== `` && (
            <SummaryBox>
              <SummaryBoxHeading headingLevel="h3">
                {`${agencyData.A_NAME} Justice40 highlights`}
              </SummaryBoxHeading>
              <SummaryBoxContent>{agencyData.J40_HIGH}</SummaryBoxContent>
            </SummaryBox>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection1;
