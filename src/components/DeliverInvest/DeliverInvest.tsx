import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
  Table,
} from '@trussworks/react-uswds';
import * as styles from './DeliverInvest.module.scss';
import { DeliverInvestProps } from '@/types';

const DeliverInvest: React.FC<DeliverInvestProps> = ({ deliverInvest }) => {
  const table1Data = (
    <>
      <thead>
        <tr>
          <th colSpan={4}>{deliverInvest.node.T1_Title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.Cat1}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.Cat1_N1}
          </td>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.Cat1_N2}
          </td>
        </tr>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.Cat2}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.Cat2_N1}
          </td>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.Cat2_N2}
          </td>
        </tr>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.Cat3}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.Cat3_N1}
          </td>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.Cat3_N2}
          </td>
        </tr>
      </tbody>
    </>
  );
  const table2Data = (
    <>
      <thead>
        <tr>
          <th colSpan={4}>{deliverInvest.node.T2_Title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.T2_M1}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.T2_N1}
          </td>
        </tr>
      </tbody>
    </>
  );
  const table3Data = (
    <>
      <thead>
        <tr>
          <th colSpan={4}>{deliverInvest.node.T3_Title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.T3_M1}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.T3_N1}
          </td>
        </tr>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.T3_M2}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.T3_N2}
          </td>
        </tr>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.T3_M3}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.T3_N3}
          </td>
        </tr>
      </tbody>
    </>
  );
  const table4Data = (
    <>
      <thead>
        <tr>
          <th colSpan={4}>{deliverInvest.node.T4_Title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" colSpan={2}>
            {deliverInvest.node.T4_M1}
          </th>
          <td className="font-mono-sm text-tabular text-center">
            {deliverInvest.node.T4_V1}
          </td>
        </tr>
      </tbody>
    </>
  );

  return (
    <>
      <Grid row>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2 className={styles.h2}>Delivering investments</h2>
        </Grid>
      </Grid>
      <Grid row>
        <Grid desktop={{ col: 6 }} tablet={{ col: 10 }} col={12}>
          Short narrative about the why delivering investments is important. I
          prem ins _dolor sit amet concertetur adinissing plitvam at magna vitan
          prat convall bandit. Phasellus id urna ultrices, vestibulum guam a.
          accumsan mauris
        </Grid>
      </Grid>
      <Grid row gap={6}>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <Table fullWidth bordered striped>
            {table1Data}
          </Table>
          <Table fullWidth bordered striped>
            {table2Data}
          </Table>
          <Table fullWidth bordered striped>
            {table3Data}
          </Table>
          <Table fullWidth bordered striped>
            {table4Data}
          </Table>
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          <SummaryBox className={`margin-top-2`}>
            <SummaryBoxHeading headingLevel="h3">
              {`Delivering investments at ${deliverInvest.node.Agency_Name}`}
            </SummaryBoxHeading>
            <SummaryBoxContent>
              {deliverInvest.node.DeliverInvest}
            </SummaryBoxContent>
          </SummaryBox>
        </Grid>
      </Grid>
    </>
  );
};

export default DeliverInvest;
