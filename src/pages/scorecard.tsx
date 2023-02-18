import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  Button,
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
    >
      <MainGridContainer>
        <Grid row gap>
          <Grid desktop={{ col: 9 }} tablet={{ col: 10 }} col={12}>
            <h1>{`Environmental Justice Scorecard`}</h1>
          </Grid>
          <Grid desktop={{ col: 3 }} tablet={{ col: 10 }} col={12}>
            <Button className={`download-scorecard`} type={`button`}>
              Download the scorecard
            </Button>
          </Grid>
        </Grid>
        <Grid row gap>
          <Grid desktop={{ col: 7 }} tablet={{ col: 10 }} col={12}>
            <p>
              Narative about the whole-of-governement progress during the first
              2 years of the Biden Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <p>
              Note about now it came together, contributions of the lAC and the
              WHEIAC. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Note about how this is iterative, first version, first of a kind.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Encouraging feedback. Praesent ac mauris nisi. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum.
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
                    The Council on Environmental Quality (CEQ) made version 1.0
                    of the Climate and Economic Justice Screening Tool available
                    on November 22, 2022
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
