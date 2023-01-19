import { graphql } from 'gatsby';
import { defineMessages, useIntl } from 'react-intl';
import {
  SummaryBox,
  SummaryBoxContent,
  SummaryBoxHeading,
} from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import { PAGE_ENDPOINTS } from '@/data/constants';
import { IPageProps } from '@/types';

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

const SecondPage = ({ data }: IPageProps) => {
  const intl = useIntl();

  return (
    <Layout
      pathname={PAGE_ENDPOINTS[1]}
      title={intl.formatMessage(SECOND_PAGE_COPY.HEADING1)}
      allAgencyNames={data.allAgencyInfoCsv.edges.map((edge) => edge.node.Name)}
    >
      <MainGridContainer>
        <h1>{intl.formatMessage(SECOND_PAGE_COPY.HEADING1)}</h1>
        <SummaryBox>
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
    allAgencyInfoCsv(sort: { Name: ASC }) {
      totalCount
      edges {
        node {
          Name
        }
      }
    }
  }
`;

export default SecondPage;
