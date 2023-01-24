import React from 'react';
import {
  Grid,
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
  Table,
} from '@trussworks/react-uswds';

// import * as styles from './InstitutionEJ.module.scss';

import { InstitutEjProps } from '@/types';

const InstitutionEJ: React.FC<InstitutEjProps> = ({ institutEj }) => {
  const table1Data = (
    <>
      <tbody>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row11}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row12}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row13}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row21}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row22}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row23}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row31}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row32}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row41}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row42}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row51}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row52}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row61}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row62}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row71}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row72}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row81}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row82}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row91}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row92}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row101}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row102}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row111}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row112}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row121}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row122}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row131}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row132}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row141}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row142}
          </td>
        </tr>
        <tr>
          <td colSpan={5} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row151}
          </td>
          <td colSpan={2} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row152}
          </td>
        </tr>
      </tbody>
    </>
  );

  const table2Data = (
    <>
      <tbody>
        <tr>
          <td colSpan={10} className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row161}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row162}
          </td>
        </tr>
      </tbody>
    </>
  );

  const table3Data = (
    <>
      <tbody>
        <tr>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row171}
          </td>
          <td className="font-mono-sm text-tabular text-left">
            {institutEj.node.Row172}
          </td>
        </tr>
      </tbody>
    </>
  );
  return (
    <>
      <Grid row>
        <Grid desktop={{ col: 8 }} tablet={{ col: 10 }} col={12}>
          <h2 className={`scorecard-header2`}>
            Institutionalizing Environmental Justice
          </h2>
        </Grid>
      </Grid>
      <Grid row>
        <Grid desktop={{ col: 6 }} tablet={{ col: 10 }} col={12}>
          Short narrative about the why Institutionalizing Environmental Justice
          is important. I prem ins _dolor sit amet concertetur adinissing
          plitvam at magna vitan prat convall bandit. Phasellus id urna
          ultrices, vestibulum guam a. accumsan mauris
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
        </Grid>
        <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
          <SummaryBox className={`margin-top-2`}>
            <SummaryBoxHeading headingLevel="h3">
              {`Institutionalizing EJ at ${institutEj.node.Agency_Name}`}
            </SummaryBoxHeading>
            <SummaryBoxContent>{institutEj.node.Summary}</SummaryBoxContent>
          </SummaryBox>
        </Grid>
      </Grid>
    </>
  );
};

export default InstitutionEJ;
