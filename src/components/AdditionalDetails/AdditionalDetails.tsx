import React from 'react';
import { Grid } from '@trussworks/react-uswds';
import { AdditionalDetailsProps } from '@/types';

// import * as styles from './AdditionalDetails.module.scss';

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  additional,
}) => {
  return (
    <>
      <Grid row>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2
            className={`scorecard-header2`}
          >{`Additional ${additional.node.Agency_Name} details`}</h2>
        </Grid>
      </Grid>
      <Grid row>
        <Grid desktop={{ col: 6 }} tablet={{ col: 10 }} col={12}>
          <p>{additional.node.P1}</p>
          <p>{additional.node.P2}</p>
          <p>{additional.node.P3}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default AdditionalDetails;
