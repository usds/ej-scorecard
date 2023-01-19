import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid } from '@trussworks/react-uswds';

// import { useAgencyInfo } from '@/hooks/use-agency-info';

import * as styles from './AgencyInfo.module.scss';
import { AgencyInfoProps } from '@/types';

const AgencyInfo: React.FC<AgencyInfoProps> = ({ info }) => {
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
              <h2>{info.Name}</h2>
              <span>{info.Contact_Name}</span>
              <span>{info.Address_Line_1}</span>
              <span>{info.Address_Line_2}</span>
              <span>{info.Phone}</span>
              <span>{info.Email}</span>
            </div>
          </Grid>
          <Grid col={8}>
            <div className={styles.agencyInfoCol2}>
              <h2>{`About ${info.Name}`}</h2>
              <p>
                <span>{`Agency size: ${info.Size}`}</span>
                <span>{`Agency value: ${info.Value}`}</span>
                <span>{`Metrics: ${info.Metric}`}</span>
              </p>
              <p>{info.About_description}</p>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AgencyInfo;
