import React from 'react';
import MainGridContainer from '../MainGridContainer';
import { FOOTER_CEQ_ADDRESS } from '@/data/constants';
import { Address, Logo, NavList } from '@trussworks/react-uswds';

// @ts-ignore
import whitehouseIcon from '@/static/images/eop-seal.svg';

// import * as styles from './AppFooter.module.scss';

// import { AppFooterProps } from '@/types';

const AppFooter: React.FC = () => {
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
          <Logo
            size={`medium`}
            key={`logoimg`}
            image={
              <img
                className={`usa-footer__logo-img`}
                src={whitehouseIcon}
                alt={`whitehouse seal`}
              />
            }
            heading={
              <div className={`j40-footer-ceq-font`}>
                <h3>Council on Environmental Quality</h3>
              </div>
            }
          />
        </MainGridContainer>
      </div>
      {/* <SurveyButton /> */}
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
