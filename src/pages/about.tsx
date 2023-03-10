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

const SECOND_PAGE_COPY = defineMessages({
  HEADING1: {
    id: `second.page.copy.HEADING1`,
    defaultMessage: `Second Page`,
    description: `page heading`,
  },
  SUMMARY_TITLE: {
    id: `second.page.copy.SUMMARY_TITLE`,
    defaultMessage: `Key Information`,
    description: `summary title`,
  },
  SUMMARY_CONTENT: {
    id: `second.page.copy.SUMMARY_CONTENT`,
    defaultMessage: `Summary content for page 2`,
    description: `summary title`,
  },
});

const SecondPage: React.FC<PageProps> = ({ data }) => {
  const intl = useIntl();

  return (
    <Layout
      pathname={NON_DROPDOWN_PAGE_ENDPOINTS[1]}
      title={`About the Environmental Justice Scorecard`}
      allAgencyNames={data.allAgencyInfoCsv.edges.map(
        (edge) => edge.node.A_NAME,
      )}
      description={`Learn more about the Environmental Justice Scorecard, the first government-wide assessment of progress towards environmental justice goals, and share your feedback on the Scorecard.`}
      keywords={`environmental justice, what is the environmental justice scorecard, what is environmental justice, environmental justice website`}
    >
      <MainGridContainer>
        <h1>{intl.formatMessage(SECOND_PAGE_COPY.HEADING1)}</h1>
        <SummaryBox className={`summary-box`}>
          <SummaryBoxHeading headingLevel="h3">
            {intl.formatMessage(SECOND_PAGE_COPY.SUMMARY_TITLE)}
          </SummaryBoxHeading>
          <SummaryBoxContent>
            {intl.formatMessage(SECOND_PAGE_COPY.SUMMARY_CONTENT)}
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

export default SecondPage;
