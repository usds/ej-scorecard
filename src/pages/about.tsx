import React from 'react';
import { graphql } from 'gatsby';
import { defineMessages, useIntl } from 'react-intl';
import { Grid } from '@trussworks/react-uswds';

import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import { NON_DROPDOWN_PAGE_ENDPOINTS } from '@/data/constants';
import { PageProps } from '@/types';

const ABOUT_PAGE_COPY = defineMessages({
  HEADING1: {
    id: `about.page.copy.HEADING1`,
    defaultMessage: `About`,
    description: `about page heading`,
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
      description={`Learn more about the Environmental Justice Scorecard, the first government-wide assessment of progress toward environmental justice goals, and share your feedback on the Scorecard.`}
      keywords={`environmental justice, what is the environmental justice scorecard, what is environmental justice, environmental justice website`}
    >
      <MainGridContainer>
        <h1>{intl.formatMessage(ABOUT_PAGE_COPY.HEADING1)}</h1>

        <Grid row gap>
          <Grid desktop={{ col: 7 }} tablet={{ col: 10 }} col={12}>
            <h2>The Environmental Justice Scorecard</h2>

            <p>
              President Biden prioritized environmental justice from the start
              of his Administration by launching a whole-of-government effort to
              confront longstanding environmental injustices and inequities. The
              Environmental Justice Scorecard is a signature component of this
              commitment. It is the first-ever government-wide assessment of
              what the federal government is doing to advance environmental
              justice.
            </p>

            <p>
              Executive Order 14008,
              {` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={`https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/27/executive-order-on-tackling-the-climate-crisis-at-home-and-abroad/`}
                target="_blank"
                rel="noreferrer"
              >
                Tackling the Climate Crisis at Home and Abroad
              </a>
              {` `}, directs the White House Office of Management and Budget, in
              coordination with the White House Council on Environmental Quality
              and other relevant agency heads, to publish an annual
              Environmental Justice Scorecard detailing agency environmental
              justice performance measures. The White House Environmental
              Justice
              {` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={`https://www.whitehouse.gov/environmentaljustice/white-house-environmental-justice-interagency-council/`}
                target="_blank"
                rel="noreferrer"
              >
                Interagency Council (IAC)
              </a>
              {` `} is also directed to develop performance measures to ensure
              accountability for work to address current and historic
              environmental injustice.
            </p>

            <h2>The Phase One Scorecard</h2>

            <p>
              The Phase One Scorecard incorporates recommendations and feedback
              from environmental justice stakeholders and experts. In
              particular, recommendations from the
              {` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={`https://www.whitehouse.gov/environmentaljustice/white-house-environmental-justice-advisory-council/`}
                target="_blank"
                rel="noreferrer"
              >
                White House Environmental Justice Advisory Council
              </a>
              {` `}
              and public comments informed its development.
            </p>

            <p>
              The Phase One Scorecard provides a baseline assessment of the
              federal government&apos;s efforts to secure environmental justice.
              It outlines steps taken, processes implemented, and other actions
              by federal agencies in 2021 and 2022 to help achieve the
              Biden-Harris Administration&apos;s environmental justice goals.
              Establishing this baseline will help measure the progress of
              federal agencies over time, creating a tool for transparency and
              accountability.
            </p>

            <p>
              The metrics and actions included in the Phase One Scorecard vary
              based on the type, size, and mission of each federal agency. For
              example, some but not all of the agencies participating in the
              Phase One Scorecard are members of the IAC and have Justice40
              covered programs. If data are unavailable for a federal agency,
              the corresponding metrics do not appear on that agency&apos;s
              page.
            </p>

            <p>
              The Phase One Scorecard provides a valuable snapshot of key
              environmental justice work in progress at a particular point in
              time, but it alone cannot fully capture the depth or range of
              active work or the long-term impact in communities. The
              Environmental Justice Scorecard will be updated annually, with the
              goal of creating a durable, robust, and comprehensive tool to
              assess and demonstrate the federal government&apos;s efforts to
              secure environmental justice for all.
            </p>

            <h2>About the Justice40 Initiative</h2>

            <p>
              President Biden’s
              {` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={`https://www.whitehouse.gov/environmentaljustice/justice40/`}
                target="_blank"
                rel="noreferrer"
              >
                Justice40 Initiative
              </a>
              {` `}
              is a key piece of the Biden-Harris Administration’s environmental
              justice agenda. Under the Justice40 Initiative, the federal
              government is working towards the goal that 40 percent of the
              overall benefits of certain federal investments in climate, clean
              energy, and other areas reach disadvantaged communities that are
              marginalized and overburdened by pollution and underinvestment.
            </p>

            <p>
              The
              {` `}
              <a
                className="usa-link usa-link--alt usa-link--external"
                href={`https://www.whitehouse.gov/wp-content/uploads/2021/07/M-21-28.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                Interim Implementation Guidance for the Justice40 Initiative
              </a>
              {` `}
              provides guidance to agencies on how to identify and track these
              benefits. Future versions of the Environmental Justice Scorecard
              will provide additional information and updates on the benefits of
              covered programs in the Justice40 Initiative.
            </p>
          </Grid>
        </Grid>
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
