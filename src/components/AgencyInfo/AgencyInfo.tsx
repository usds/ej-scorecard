import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid } from '@trussworks/react-uswds';

// import { useAgencyInfo } from '@/hooks/use-agency-info';

import * as styles from './AgencyInfo.module.scss';
import { IAgencyInfo, IDeliverInvest } from '@/types';

export interface AgencyInfoProps {
  info: IAgencyInfo;
  di: IDeliverInvest;
}

const AgencyInfo: React.FC<AgencyInfoProps> = ({ info, di }) => {
  // Todo: may not need this custom hook
  // const agencyInfo = useAgencyInfo();
  console.log(`info: `, info);
  console.log(`di: `, di);

  return (
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
  );
};

export default AgencyInfo;
