import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid } from '@trussworks/react-uswds';

// import { useAgencyInfo } from '@/hooks/use-agency-info';

import * as styles from './AgencyInfo.module.scss';
import { AgencyInfoProps } from '@/types';
import ScorecardSideNav from '../ScorecardSideNav';

const AgencyInfo: React.FC<AgencyInfoProps> = ({
  info,
  allAgencyNames,
  pathname,
}) => {
  // Todo: may not need this custom hook
  // const agencyInfo = useAgencyInfo();

  return (
    <Grid row gap>
      <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
        <Grid row gap>
          <Grid col={4}>
            <div className={styles.agencyInfoCol1}>
              <StaticImage
                className={styles.agencyInfoLogo}
                src="../../../static/images/agency-a.png"
                alt="Agency logo"
              />
              <h3>{info.Name}</h3>
              <span>{info.Contact_Name}</span>
              <span>{info.Address_Line_1}</span>
              <span>{info.Address_Line_2}</span>
              <span>{info.Phone}</span>
              <span>{info.Site}</span>
            </div>
          </Grid>
          <Grid col={8}>
            <div className={styles.agencyInfoCol2}>
              <h2>{`About ${info.Name}`}</h2>
              <p>{info.About_description}</p>
            </div>
          </Grid>
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
