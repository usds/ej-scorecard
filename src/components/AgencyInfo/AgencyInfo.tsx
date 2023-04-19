import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid } from '@trussworks/react-uswds';

// import { useAgencyInfo } from '@/hooks/use-agency-info';

import * as styles from './AgencyInfo.module.scss';
import { AgencyInfoProps } from '@/types';
import ScorecardSideNav from '../ScorecardSideNav';

// If the phone has a comma in it (implying more than one phone number), split it into
// two distict phone numbers
const getPhoneMarkup = (agencyPhone: string) => {
  if (agencyPhone.includes(`,`)) {
    const phoneNumberArray = agencyPhone.split(`,`);
    return (
      <>
        <span>
          <a href={`tel:${phoneNumberArray[0]}`}>{phoneNumberArray[0]}</a>
        </span>
        <span>
          <a href={`tel:${phoneNumberArray[1]}`}>{phoneNumberArray[1]}</a>
        </span>
      </>
    );
  } else {
    return (
      <span>
        <a href={`tel:${agencyPhone}`}>{agencyPhone}</a>
      </span>
    );
  }
};

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
              {agencyData.A_PHONE && getPhoneMarkup(agencyData.A_PHONE)}
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
              <h2>{`About ${agencyData.THE_A_NAME}`}</h2>
              <p>{agencyData.A_MISSION}</p>
              {` `}
            </div>
          </Grid>
        </Grid>

        <Grid row gap>
          <p>
            This page provides information on how{` `}
            <strong>{agencyData.THE_A_NAME}</strong> is working to advance
            environmental justice for in communities across America. It is part
            of Phase One of the Biden-Harris Administration&apos;s Environmental
            Justice Scorecard.
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
