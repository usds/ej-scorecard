import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
  Table,
} from '@trussworks/react-uswds';
import { ReduceHarmProps } from '@/types';

// import * as styles from './ReduceHarm.module.scss';

const ReduceHarm: React.FC<ReduceHarmProps> = ({ reduceHarm }) => {
  const table1Data = (
    <>
      <tbody>
        <tr>
          <td className="font-mono-sm text-tabular text-left">
            {reduceHarm.node.Row11}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {reduceHarm.node.Row12}
          </td>
        </tr>
        <tr>
          <td className="font-mono-sm text-tabular text-left">
            {reduceHarm.node.Row21}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {reduceHarm.node.Row22}
          </td>
        </tr>
        <tr>
          <td className="font-mono-sm text-tabular text-left vertical-align-top">
            {reduceHarm.node.Row31}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {reduceHarm.node.Row32}
          </td>
        </tr>
      </tbody>
    </>
  );

  return (
    <>
      <Grid row>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2 className={`scorecard-header2`}>Reducing burdens & harms</h2>
        </Grid>
      </Grid>
      <Grid row>
        <Grid desktop={{ col: 6 }} tablet={{ col: 10 }} col={12}>
          Short narrative about the why reducing hurdens & harms is important. I
          prem ins _dolor sit amet concertetur adinissing plitvam at magna vitan
          prat convall bandit. Phasellus id urna ultrices, vestibulum guam a.
          accumsan mauris
        </Grid>
      </Grid>
      <Grid row gap={6}>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          <SummaryBox className={`margin-top-3`}>
            <SummaryBoxHeading headingLevel="h3">
              {`Reducing burdens & harms at ${reduceHarm.node.Agency_Name}`}
            </SummaryBoxHeading>
            <SummaryBoxContent>{reduceHarm.node.Row42}</SummaryBoxContent>
          </SummaryBox>
        </Grid>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <Table fullWidth bordered striped>
            {table1Data}
          </Table>
        </Grid>
      </Grid>
    </>
  );
};

export default ReduceHarm;
