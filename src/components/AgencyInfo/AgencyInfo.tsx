import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid } from '@trussworks/react-uswds';

// import { useAgencyInfo } from '@/hooks/use-agency-info';

import * as styles from './AgencyInfo.module.scss';
import { AgencyInfoProps } from '@/types';
import ScorecardSideNav from '../ScorecardSideNav';

const AgencyInfo: React.FC<AgencyInfoProps> = ({
  agencyData,
  allAgencyNames,
  pathname,
  gatsbyImageData,
}) => {
  return (
    <Grid row gap>
      <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
        <Grid row gap>
          <Grid col={4}>
            <div className={styles.agencyInfoCol1}>
              <GatsbyImage
                className={styles.agencyInfoLogo}
                image={gatsbyImageData}
                alt="Agency logo"
              />
              <h3>{agencyData.A_NAME}</h3>
              <span>{agencyData.A_ADD1}</span>
              <span>{agencyData.A_ADD2}</span>
              <span>{agencyData.A_PHONE}</span>
              {agencyData.A_EMAIL !== `` && (
                <span>
                  <a href={`mailto:${agencyData.A_EMAIL}`}>
                    {agencyData.A_EMAIL}
                  </a>
                </span>
              )}
              <span>
                <a
                  className="usa-link usa-link--alt usa-link--external"
                  href={`${agencyData.A_URLLINK}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {agencyData.A_URLTXT}
                </a>
              </span>
            </div>
          </Grid>
          <Grid col={8}>
            <div className={styles.agencyInfoCol2}>
              <h2>{`About ${agencyData.A_NAME}`}</h2>
              <p>{agencyData.A_MISSION}</p>
              {` `}
            </div>
          </Grid>
        </Grid>

        <Grid row gap>
          <p>
            This page provides information on how{` `}
            <strong>{agencyData.A_NAME}</strong> is working to reduce climate
            and environmental burdens and harms in communities across America.
          </p>
          <p>
            {`
            This information is part of the Federal government’s first Environmental Justice Scorecard, which will be updated and improved each year based on public input and feedback. The Environmental Justice Scorecard tracks the work of Federal agencies to deliver on the Justice 40 Initiative, to implement and enforce environmental and civil rights protections on behalf of communities, and to evaluate and develop agency capacity and resources to institutionalize environmental justice.
            `}
          </p>
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
