import React from 'react';
import { graphql } from 'gatsby';
import { defineMessages, useIntl } from 'react-intl';
import {
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import { NON_DROPDOWN_PAGE_ENDPOINTS } from '@/data/constants';
import { PageProps } from '@/types';

const THIRD_PAGE_COPY = defineMessages({
  HEADING1: {
    id: `third.page.copy.HEADING1`,
    defaultMessage: `Third Page`,
    description: `page heading`,
  },
  SUMMARY_TITLE: {
    id: `third.page.copy.SUMMARY_TITLE`,
    defaultMessage: `Key Information`,
    description: `summary title`,
  },
  SUMMARY_CONTENT: {
    id: `third.page.copy.SUMMARY_CONTENT`,
    defaultMessage: `Summary content for page 3`,
    description: `summary title`,
  },
});

const ThirdPage: React.FC<PageProps> = ({ data }) => {
  const intl = useIntl();

  return (
    <Layout
      pathname={NON_DROPDOWN_PAGE_ENDPOINTS[2]}
      title={`Environmental Justice Scorecard Contact`}
      allAgencyNames={data.allAgencyInfoCsv.edges.map(
        (edge) => edge.node.A_NAME,
      )}
      description={`Contact the Council on Environmental Quality (CEQ) with your questions about the Environmental Justice Scorecard and EnvironmentalJustice.gov`}
      keywords={`contact, environmental justice questions, council on environmental quality`}
    >
      <MainGridContainer>
        <h1>{intl.formatMessage(THIRD_PAGE_COPY.HEADING1)}</h1>
        <SummaryBox className={`summary-box`}>
          <SummaryBoxHeading headingLevel="h3">
            {intl.formatMessage(THIRD_PAGE_COPY.SUMMARY_TITLE)}
          </SummaryBoxHeading>
          <SummaryBoxContent>
            {intl.formatMessage(THIRD_PAGE_COPY.SUMMARY_CONTENT)}
          </SummaryBoxContent>
        </SummaryBox>
      </MainGridContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    allAgencyInfoCsv(sort: { A_NAME: ASC }) {
      totalCount
      edges {
        node {
          A_NAME
        }
      }
    }
  }
`;

export default ThirdPage;
