import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  // Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
  CardHeader,
  Grid,
} from '@trussworks/react-uswds';
import Layout from '@/components/Layout';
import MainGridContainer from '@/components/MainGridContainer';
import BtnLaunchExternal from '@/components/BtnLaunchExternal';
import { NON_DROPDOWN_PAGE_ENDPOINTS } from '@/data/constants';
import { toKebabCase } from '@/components/util';
import { PageProps } from '@/types';

const ScorecardPage: React.FC<PageProps> = ({ data }) => {
  const agencyGridData = data.allAgencyInfoCsv.edges.map((edge) => {
    // for each agency page, find the gatsbyImageData using the logo field:
    const imageLogoData = data.allImageSharp.edges.find(({ node }) =>
      node.gatsbyImageData.images.fallback?.src.endsWith(edge.node.A_LOGO),
    );
    return {
      id: edge.node.id,
      agencyName: edge.node.A_NAME,
      agencyLogo: imageLogoData?.node.gatsbyImageData,
    };
  });

  return (
    <Layout
      pathname={NON_DROPDOWN_PAGE_ENDPOINTS[0]}
      title={`Environmental Justice Scorecard`}
      allAgencyNames={data.allAgencyInfoCsv.edges.map(
        (edge) => edge.node.A_NAME,
      )}
      description={`Environmentaljustice.gov provides access to tools used by the Federal Government to measure environmental justice, including Environmental Justice Scorecard, measuring how agencies are funding solutions.`}
      keywords={`environmental justice, scorecard, council on environmental quality, justice40, environmental justice communities`}
    >
      <MainGridContainer>
        <Grid row gap>
          <Grid desktop={{ col: 9 }} tablet={{ col: 10 }} col={12}>
            <h1>{`Environmental Justice Scorecard`}</h1>
          </Grid>
          {/* <Grid desktop={{ col: 3 }} tablet={{ col: 10 }} col={12}>
            <Button className={`download-scorecard`} type={`button`}>
              Download the scorecard
            </Button>
          </Grid> */}
        </Grid>
        <Grid row gap>
          <Grid desktop={{ col: 7 }} tablet={{ col: 10 }} col={12}>
            <p>
              Welcome to the Biden-Harris Administration&apos;s Environmental
              Justice Scorecard. On this website, you will find information
              about what federal agencies are doing to advance environmental
              justice in communities across America.
            </p>
            <p>
              President Biden has prioritized environmental justice by launching
              a whole-of-government effort to confront longstanding
              environmental injustices and inequities. The Environmental Justice
              Scorecard is a signature component of this commitment. It is the
              first-ever government-wide assessment of what the federal
              government is doing to advance environmental justice.
            </p>
            <p>
              The Environmental Justice Scorecard was created at the direction
              of President Biden to assess the federal government&apos;s
              progress on advancing environmental justice, to provide
              transparency for the public, and to increase accountability for
              federal agencies.
            </p>

            <h2>Phase One Scrorecard</h2>

            <p>
              This first version of the Environmental Justice Scorecard, or the
              Phase One Scorecard, presents a baseline assessment of actions
              taken by federal agencies in 2021 and 2022 to help achieve the
              Biden-Harris Administration&apos;s environmental justice goals.
            </p>

            <p>
              The Phase One Scorecard reports on the progress of XX federal
              agencies in the following areas:
            </p>

            <ul>
              <li>
                Advancing the President&apos;s
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
              </li>
              <li>
                Implementing and enforcing environmental and civil rights laws
              </li>
              <li>
                Embedding environmental justice throughout the federal
                government
              </li>
            </ul>

            <p>
              Future versions of the Environmental Justice Scorecard will build
              on this baseline assessment, measure the progress of federal
              agencies over time, and include additional information on how this
              work is benefiting disadvantaged communities.
            </p>
          </Grid>
          <Grid desktop={{ col: 1 }} tablet={{ col: 10 }} col={12}></Grid>
          <Grid desktop={{ col: 4 }} tablet={{ col: 10 }} col={12}>
            <CardGroup>
              <Card>
                <CardHeader>
                  <h2 className="usa-card__heading">
                    CEJST 1.0 is now available
                  </h2>
                </CardHeader>
                <CardBody>
                  <p>
                    {` `}
                    The Climate and Economic Justice Screening Tool helps
                    federal agencies identify disadvantaged communities that are
                    overburdened by pollution and underinvestment.
                    {` `}
                  </p>
                </CardBody>
                <CardFooter className={`flex-align-center`}>
                  <BtnLaunchExternal
                    href={`https://screeningtool.geoplatform.gov/en/#3/33.47/-97.5`}
                    buttonText={`View tool`}
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="usa-card__heading">Agency Highlights</h2>
                </CardHeader>
                <CardBody>
                  <p>
                    {` `}
                    Agency A did XYZ in an effort to promote Environmental
                    Justice throughout the organization. Based on a commitment
                    from person RST, the agency focused on three key areas in
                    2021-2022
                    {` `}
                  </p>
                </CardBody>
                <CardFooter>
                  <BtnLaunchExternal
                    href={`https://screeningtool.geoplatform.gov/en/#3/33.47/-97.5`}
                    buttonText={`Learn more`}
                    showlaunchIcon={false}
                  />
                </CardFooter>
              </Card>
            </CardGroup>
          </Grid>
        </Grid>

        <Grid row>
          <h1>{`View Agency progress`}</h1>
          <span className={`scorecard-header-span`}>
            (Click on any Agency to see additional details)
          </span>
        </Grid>

        <Grid row>
          <div className="agency-progress-section">
            {agencyGridData.map(({ id, agencyLogo, agencyName }) => (
              <Link key={id} to={`/scorecard/${toKebabCase(agencyName)}`}>
                <div className="agency-card">
                  {agencyLogo && (
                    <GatsbyImage
                      className="agency-logo"
                      image={agencyLogo}
                      alt="agency logo"
                    />
                  )}
                  <div className="agency-name">{agencyName}</div>
                </div>
              </Link>
            ))}
          </div>
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
          id
          A_NAME
          A_LOGO
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          original {
            src
          }
          gatsbyImageData(height: 125, width: 125)
        }
      }
    }
  }
`;

export default ScorecardPage;
