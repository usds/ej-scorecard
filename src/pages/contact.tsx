import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import { NON_DROPDOWN_PAGE_ENDPOINTS } from '@/data/constants';
import { PageProps } from '@/types';

const CONTACT_PAGE_COPY = defineMessages({
  HEADING1: {
    id: `contact.page.copy.HEADING1`,
    defaultMessage: `Contact`,
    description: `contact page heading`,
  },
  HEADING2: {
    id: `contact.page.copy.HEADING2`,
    defaultMessage: `Send Email`,
    description: `contact page heading 2`,
  },
});

const CONTACT_PAGE_COPY_JSX = {
  BODY: (
    <FormattedMessage
      id={`contact.page.body`}
      defaultMessage={`For general feedback, email: <link1>EJScorecard-Support@omb.eop.gov</link1>`}
      description={`contact body`}
      values={{
        link1: (msg) => <a href={`mailto:${msg}`}>{msg}</a>,
      }}
    />
  ),
};
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
        <h1>{intl.formatMessage(CONTACT_PAGE_COPY.HEADING1)}</h1>
        <h2>{intl.formatMessage(CONTACT_PAGE_COPY.HEADING2)}</h2>
        <p>{CONTACT_PAGE_COPY_JSX.BODY}</p>
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
