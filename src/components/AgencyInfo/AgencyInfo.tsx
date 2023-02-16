import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid } from '@trussworks/react-uswds';

// import { useAgencyInfo } from '@/hooks/use-agency-info';

import * as styles from './AgencyInfo.module.scss';
import { AgencyInfoProps } from '@/types';
import ScorecardSideNav from '../ScorecardSideNav';

const AgencyInfo: React.FC<AgencyInfoProps> = ({
  info,
  allAgencyNames,
  pathname,
  gatsbyImageData,
}) => {
  // Todo: may not need this custom hook
  // const agencyInfo = useAgencyInfo();

  return (
    <Grid row gap>
      <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
        {/* General Info */}
        <Grid row gap>
          <Grid col={4}>
            <div className={styles.agencyInfoCol1}>
              <GatsbyImage
                className={styles.agencyInfoLogo}
                image={gatsbyImageData}
                alt="Agency logo"
              />
              <h3>{info.A_NAME}</h3>
              <span>{info.A_ADD1}</span>
              <span>{info.A_ADD2}</span>
              <span>{info.A_PHONE}</span>
              <span>
                <a
                  href={`https://${info.J40_URLLINK}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.J40_URLTXT}
                </a>
              </span>
            </div>
          </Grid>
          <Grid col={8}>
            <div className={styles.agencyInfoCol2}>
              <h2>{`About ${info.A_NAME}`}</h2>
              <p>{info.A_MISSION}</p>
            </div>
          </Grid>
          <p>
            {`
            This page provides information on how ${info.A_NAME} is working to reduce climate and environmental burdens and harms in communities across America.
            `}
          </p>
          <p>
            {`
            This information is part of the Federal government’s first Environmental Justice Scorecard, which will be updated and improved each year based on public input and feedback. The Environmental Justice Scorecard tracks the work of Federal agencies to deliver on the Justice 40 Initiative, to implement and enforce environmental and civil rights protections on behalf of communities, and to evaluate and develop agency capacity and resources to institutionalize environmental justice.
            `}
          </p>
        </Grid>

        {/* Justice40 Initiative */}
        <Grid row gap>
          <h3>Justice40 Initiative</h3>
          <p>
            For the first time in our nation’s history, the Federal government
            has made it a goal that 40 percent of the overall benefits of
            certain Federal investments flow to disadvantaged communities that
            are marginalized, underserved, and overburdened by pollution. The
            following reflects the historic resources available to communities
            in Fiscal Year 2022 to implement the Justice40 Initiative. Please
            visit this page <a href={info.J40_URLLINK}>{info.J40_URLTXT}</a>
          </p>

          {info.A_EMAIL ? (
            <p>
              {`
          The goal of 40 percent of overall benefits refers to all covered programs under the Justice40 Initiative. Information about how these programs will identify and track benefits will be shared in the Phase Two Environmental Justice Scorecard. For more information about the benefits of the covered programs in this agency, please contact ${info.A_EMAIL}.
          `}
            </p>
          ) : (
            <p>
              {`
          The goal of 40 percent of overall benefits refers to all covered programs under the Justice40 Initiative. Information about how these programs will identify and track benefits will be shared in the Phase Two Environmental Justice Scorecard.
          `}
            </p>
          )}
          <h4>{`${info.J40_TCP} Justice40 covered programs`}</h4>
          <ul className={styles.bullet1}>
            <li>{`
            ${info.J40_ANNOUNCE} announcements in Fiscal Year 2022 representing a total of ${info.J40_AMOUNT} funding that is available to benefit communities **add footnote, that the funding amounts include annual discretionary and mandatory appropriations, Inflation Reduction Act, and Bipartisan Infrastructure Law funding 
            `}</li>
            <ul>
              <li>{info.J40_E1}</li>
              <li>{info.J40_E2}</li>
              <li>{info.J40_E3}</li>
            </ul>
            <li>
              Made program modifications for Justice40 covered programs such as:
            </li>
            <ul>
              <li>{info.J40_MOD1}</li>
              <li>{info.J40_MOD2}</li>
              <li>{info.J40_MOD3}</li>
            </ul>
          </ul>
        </Grid>

        <Grid row>
          <div>Highlights</div>
        </Grid>
        <Grid row>
          <div>{info.J40_HIGH}</div>
        </Grid>

        {/* Environmental and Civil Rights Protection */}
        <Grid row gap>
          <h3>Environmental and Civil Rights Protection</h3>
          {info.A_STRATPLANLINK ? (
            <p>
              Federal agencies are advancing environmental justice by carrying
              out their responsibilities under the law to identify and address
              disproportionate and adverse human health, environmental,
              climate-related and other cumulative impacts on disadvantaged
              communities, and to ensure that all communities experience the
              protection of our nation’s bedrock environmental laws. The
              following information summarizes some of the work the agency has
              done from January 2021 to September 2022 in these areas. For more
              information, please visit{` `}
              <a href={info.A_STRATPLANLINK}>{info.A_STRATPLANTXT}</a>.
            </p>
          ) : (
            <p>
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
          <ul className={styles.bullet1}>
            <li>{info.A_NEPA}</li>
            <li>{`${info.NUM_NEPA} project modifications where environmental justice concerns were raised during the NEPA process`}</li>
            <ul>
              <li>{info.NEPA_H1}</li>
              <li>{info.NEPA_H2}</li>
              <li>{info.NEPA_H3}</li>
            </ul>
            <li>{`
            ${info.NEPA_TRAIN} trainings on environmental justice considerations during NEPA reviews
            `}</li>
          </ul>
          <h4>
            Title VI of the Civil Rights Act of 1964 and Environmental Justice
          </h4>
          <p>{`
          Title VI of the Civil Rights Act of 1964 requires that no person be excluded from participation in, be denied the benefits of, or be subject to discrimination under any program or activity receiving Federal financial assistance on account of their race, color or national origin. Title VI requires Federal agencies to ensure that programs or activities receiving Federal funding, including those that affect human health or the environment, do not use discriminatory criteria, methods, or practices. The following includes updates from ${info.A_NAME} on Title VI that are related to environmental justice.
          `}</p>
          <p>{info.TITLEVI_NAR}</p>
          <ul className={styles.bullet1}>
            <li>{`
            ${info.TITLEVI_N} open Title VI or complaints related to environmental justice from January 2021 to September 2022
            `}</li>
            <li>
              {`
              ${info.TITLEVI_R_N} closed Title VI compliance reviews or resolution agreements related to environmental justice from January 2021 to September 2022 
              `}
            </li>
          </ul>
          <h4>Centering Justice in Decision-making</h4>
          <p>{`
          Federal agencies are working to ensure that the voices, perspectives, and lived experiences of environmental justice communities are heard and reflected in the priorities, policies, investments, and decision-making of the Federal government. The following information summarizes some of the work ${info.A_NAME} did from January 2021 to September 2022 to center environmental justice in its decision-making.
          `}</p>
          <h4>
            <i>Community Input and Engagement</i>
          </h4>
          <ul className={styles.bullet1}>
            <li>{info.A_NAR}</li>
            <li>{`${info.TA_N} technical assistance outreach events in Fiscal Year 2022`}</li>
            <ul>
              <li>{info.TA_E1}</li>
              <li>{info.TA_E2}</li>
              <li>{info.TA_E3}</li>
            </ul>
            <li>{`${info.PP_N} public processes related to EJ, e.g. RFIs or listening sessions`}</li>
            <ul>
              <li>{info.PP_E1}</li>
              <li>{info.PP_E2}</li>
              <li>{info.PP_E3}</li>
            </ul>
          </ul>
          <h4>
            <i>Consultation and Partnership with Tribal Nations</i>
          </h4>
          <ul className={styles.bullet1}>
            <li>{info.TC_NAR}</li>
            <li>{`${info.TC_N} Tribal Consultations related to environmental justice from January 2021 to September 2022`}</li>
            <ul>
              <li>{info.TC_E1}</li>
              <li>{info.TC_E2}</li>
              <li>{info.TC_E3}</li>
            </ul>
          </ul>
        </Grid>

        <Grid row>
          <div>Highlights</div>
        </Grid>
        <Grid row>
          <div>{info.ECR_HIGH}</div>
        </Grid>

        {/* Institutionalizing Environmental Justice */}
        <Grid row gap>
          <h3>Institutionalizing Environmental Justice</h3>
          <p>
            Since the start of the Biden-Harris Administration, Federal agencies
            have been working to better institutionalize environmental justice
            into their work, including by implementing Executive Order 12898 and
            Executive Order 14008. The following section provides information on
            some of the work the agency has done from January 2021 to September
            2022 to institutionalize environmental justice.{` `}
          </p>
          <ul className={styles.bullet1}>
            <li>{`${info.PLAN_BOOL} an EJ Strategic Plan that ${info.PLAN_UPDATE} updated in the past 5 years`}</li>
            <ul>
              <li>{info.EJP_E1}</li>
              <li>{info.EJP_E2}</li>
              <li>{info.EJP_E3}</li>
            </ul>
            <li>{`${info.EJTOOL_N} EJ tools or resources`}</li>
            <li>{`
            ${info.EJSTAFF_N} staff that work on environmental justice, either in a full- or part-time capacity
            `}</li>
            <li>{`${info.EJTRAIN_N} training for staff on environmental justice, as a general EJ training or civil rights and EJ training`}</li>
            <li>{`${info.EJWG_N} EJ office and internal working groups/steering committees/councils on environmental justice`}</li>
            <li>{info.EJP_NAR}</li>
          </ul>
        </Grid>

        <Grid row>
          <div>Highlights</div>
        </Grid>
        <Grid row>
          <div>{info.IEJ_HIGH}</div>
        </Grid>
      </Grid>
      <Grid desktop={{ col: 1 }} tablet={{ col: 10 }} col={12} />
      <Grid desktop={{ col: 3 }} tablet={{ col: 10 }} col={12}>
        <ScorecardSideNav allAgencyNames={allAgencyNames} pathname={pathname} />
      </Grid>
    </Grid>
  );
};

export default AgencyInfo;
