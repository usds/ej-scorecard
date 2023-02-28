import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';
// import * as styles from './TemplateSection3.module.scss';

import { TemplateSectionProps } from '@/types';

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
            Since the start of the Biden-Harris Administration, Federal agencies
            have been working to better institutionalize environmental justice
            into their work, including by implementing Executive Order 12898 and
            Executive Order 14008. The following section provides information on
            some of the work the agency has done from January 2021 to September
            2022 to institutionalize environmental justice.{` `}
          </p>
          <ul className={`bullet1`}>
            <li>
              <strong>{agencyData.PLAN_BOOL}</strong> an EJ Strategic Plan that
              {` `}
              {agencyData.PLAN_UPDATE !== `` && (
                <strong>{agencyData.PLAN_UPDATE}</strong>
              )}
              {` `}
              updated in the past 5 years
            </li>
            <ul>
              <li>{agencyData.EJP_E1}</li>
              <li>{agencyData.EJP_E2}</li>
              <li>{agencyData.EJP_E3}</li>
            </ul>
            <li>
              <strong>{agencyData.EJTOOL_N}</strong> EJ tools or resources
            </li>
            <li>
              <strong>{agencyData.EJSTAFF_N}</strong> staff that work on
              environmental justice, either in a full- or part-time capacity
            </li>
            <li>
              <strong>{agencyData.EJTRAIN_N}</strong> training for staff on
              environmental justice, as a general EJ training or civil rights
              and EJ training
            </li>
            <li>
              <strong>{agencyData.EJWG_N}</strong> EJ office and internal
              working groups/steering committees/councils on environmental
              justice{` `}
            </li>
            <li>{agencyData.EJP_NAR}</li>
          </ul>
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          {agencyData.IEJ_HIGH !== `` && (
            <SummaryBox>
              <SummaryBoxHeading headingLevel="h3">
                {`Institutionalizing EJ at ${agencyData.A_NAME}`}
              </SummaryBoxHeading>
              <SummaryBoxContent>{agencyData.IEJ_HIGH}</SummaryBoxContent>
            </SummaryBox>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateSection3;
