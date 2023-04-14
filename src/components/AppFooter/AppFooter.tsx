import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import MainGridContainer from '@/components/MainGridContainer';
import { FOOTER_CEQ_ADDRESS } from '@/data/constants';
import { Address, Grid, NavList } from '@trussworks/react-uswds';
import { useGatsbyImageData } from '@/hooks/gatsby-image-data';

import * as styles from './AppFooter.module.scss';
import SurveyButton from '@/components/SurveyButton';

const AppFooter: React.FC = () => {
  const allImageSharp = useGatsbyImageData();

  const footerSealObject = allImageSharp.edges.filter(
    (edge: {
      node: { gatsbyImageData: { images: { fallback: { src: string } } } };
    }) =>
      edge.node.gatsbyImageData.images.fallback.src.endsWith(`footer-seal.png`),
  );

  const NAVLINKS = [
    [
      <strong key={`col1-header`}>Contact</strong>,
      <Address
        className={`j40-footer-address`}
        key={`footeraddress`}
        size={`big`}
        items={[
          FOOTER_CEQ_ADDRESS.NAME,
          FOOTER_CEQ_ADDRESS.STREET,
          FOOTER_CEQ_ADDRESS.CITY_STATE,
          FOOTER_CEQ_ADDRESS.PHONE,
        ]}
      />,
    ],
    [
      <strong key={`col2-header`}>More information</strong>,
      <a
        className={`footer-link-first-child`}
        key={`col1-link1`}
        href={`https://www.whitehouse.gov/`}
        target={`_blank`}
      >
        Whitehouse.gov
      </a>,
      <a
        key={`col1-link2`}
        href={`https://www.whitehouse.gov/ceq/foia`}
        target={`_blank`}
      >
        Freedom of Information Act (FOIA)
      </a>,
      <a
        key={`col1-link3`}
        href={`https://www.whitehouse.gov/privacy/`}
        target={`_blank`}
      >
        Privacy Policy
      </a>,
    ],
    [
      <strong key={`col2-header`}>
        Have questions about government services?
      </strong>,
      <a
        className={`footer-link-first-child`}
        key={`col1-link1`}
        href={`#`}
        target={`_blank`}
      >
        Find a contact at USA.gov
      </a>,
    ],
  ];

  return (
    <footer className={`app-footer`}>
      <div
        className={`usa-footer__primary-section`}
        data-cy={`footer-primary-block`}
      >
        <MainGridContainer>
          <div className={`grid-row tablet-lg:grid-col4`}>
            {NAVLINKS.map((links, i) => (
              <div
                key={`linkSection-${i}`}
                className={`mobile-lg:grid-col-12 desktop:grid-col-4`}
              >
                <NavSection links={links} />
              </div>
            ))}
          </div>
        </MainGridContainer>
      </div>

      <div className={`usa-footer__secondary-section`}>
        <MainGridContainer>
          <Grid row>
            <Grid col={1}>
              <GatsbyImage
                image={footerSealObject[0].node?.gatsbyImageData}
                alt="Agency logo"
              />
            </Grid>
            <Grid col={8}>
              <div className={styles.footerTextBox}>
                <div>
                  The Office of Management and Budget and the Council on
                  Environmental Quality
                </div>
                {/* <div>
                  CEQ, OMB and the IAC acknowledges and appreciates the support
                  provided by the
                  {` `}
                  <a
                    className="usa-link usa-link--alt usa-link--external"
                    href={`https://www.usds.gov/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    U.S. Digital Service
                  </a>
                  {` `}
                  and the
                  {` `}
                  <a
                    className="usa-link usa-link--alt usa-link--external"
                    href={`https://www.whitehouse.gov/ostp/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Office of Science, Technology, and Privacy
                  </a>
                  {` `}
                  for this website, which is hosted on the
                  {` `}
                  <a
                    className="usa-link usa-link--alt usa-link--external"
                    href={`https://www.doi.gov/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Department of the Interior&#39;s
                  </a>
                  {` `}
                  Geoplatform.
                </div> */}
              </div>
            </Grid>
          </Grid>
        </MainGridContainer>
      </div>
      <SurveyButton />
    </footer>
  );
};

const NavSection = ({
  links,
}: {
  links: React.ReactNode[];
}): React.ReactElement => {
  const [primaryLinkOrHeading, ...secondaryLinks] = links;
  return (
    <section>
      <div className={`j40-h4`}>{primaryLinkOrHeading}</div>
      <NavList type={`footerSecondary`} items={secondaryLinks} />
    </section>
  );
};
export default AppFooter;
