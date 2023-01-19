import { useState } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';

import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
  NavDropDownButton,
  Menu,
} from '@trussworks/react-uswds';
import MainGridContainer from '@/components/MainGridContainer';
import GovBanner from '@/components/GovBanner';
import { PAGE_ENDPOINTS } from '@/data/constants';

// @ts-ignore
import siteLogo from '@/static/images/usds-logo.png';
import * as styles from './AppHeader.module.scss';
import { IPathname } from '@/types';

/**
 * The AppHeader component will control how the header looks for both mobile and desktop
 *
 * The Header is defined as
 * 1. One Gov Banners (ie, official gov website)
 * 2. Logo and Nav Links Row
 * 3. Any Alerts
 *
 * @param {string} pathname
 * @return {JSX.Element}
 */
const AppHeader = ({ pathname }: IPathname) => {
  /**
   * State variable to control the toggling of mobile menu button
   */
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  /**
   * State variable to hold the open/close state of each nav dropdown. This will allow for two
   * dropdown that are being used, each corresponding to an index in the state array:
   *
   * index 0 = Scorecard dropdown
   */
  const [isOpen, setIsOpen] = useState([false]);

  const HEADER = {
    LOGO_TITLE: (
      <FormattedMessage
        id={`common.nav.LOGO_TITLE`}
        defaultMessage={`Environmental Justice.gov`}
        description={`Navigate to any page. This is LOGO_TITLE in the header`}
      />
    ),
  };

  /**
   * This toggle function will handle Scorecard nav link toggle.
   *
   * @param {number} index
   */
  const onToggle = (index: number): void => {
    // The setIsOpen is used to toggle the currently selected nav link
    setIsOpen((prevIsOpen) => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !prevIsOpen[index];
      return newIsOpen;
    });
    /**
     * When on desktop only, the dropdown nav links should close if any of the other ones
     * are still open. This next set of logic handles that.
     */
    // if (
    //   index === 0 &&
    //   isOpen[1] === true &&
    //   width > USWDS_BREAKPOINTS.DESKTOP
    // ) {
    //   setIsOpen([isOpen[0], false]);
    // } else if (
    //   index === 1 &&
    //   isOpen[0] === true &&
    //   width > USWDS_BREAKPOINTS.DESKTOP
    // ) {
    //   setIsOpen([false, isOpen[1]]);
    // }
  };

  /**
   * This defines the array of links for the scorecard nav
   */
  // Todo: have this be created dynamically
  const agencyLinks = [
    <Link
      to={`/scorecard/agency-a`}
      key={`agency-a`}
      // activeClassName="usa-current"
      data-cy={`nav-link-agency-a`}
    >
      {`Agency A`}
    </Link>,
    <Link
      to={`/scorecard/agency-b`}
      key={`agency-b`}
      // activeClassName="usa-current"
      data-cy={`nav-link-agency-b`}
    >
      {`Agency B`}
    </Link>,
    <Link
      to={`/scorecard/agency-c`}
      key={`agency-c`}
      // activeClassName="usa-current"
      data-cy={`nav-link-agency-c`}
    >
      {`Agency C`}
    </Link>,
    <Link
      to={`/scorecard/agency-d`}
      key={`agency-d`}
      // activeClassName="usa-current"
      data-cy={`nav-link-agency-d`}
    >
      {`Agency D`}
    </Link>,
  ];

  // ScorecardNavDropDown
  const ScorecardNav = () => (
    <>
      {/* Add a className of usa-current anytime this component renders when the location of the app is on
      any scorecard page. This will style the nav link with a bottom border */}
      <NavDropDownButton
        className={pathname.includes(`scorecard`) ? `usa-current` : ``}
        key="scorecardNavDropDown"
        label={`Scorecard`}
        menuId="scorecardMenu"
        isOpen={isOpen[0]}
        onToggle={(): void => onToggle(0)}
        data-cy={`nav-dropdown-scorecard-nav`}
      ></NavDropDownButton>
      <Menu
        id="scorecardMenu"
        type="subnav"
        items={agencyLinks}
        isOpen={isOpen[0]}
      ></Menu>
    </>
  );

  // Logo text
  const logoLine1 = HEADER.LOGO_TITLE;

  const navLinks = [
    <ScorecardNav key="scorecardNav" />,
    <LocalizedLink
      to={`/about`}
      key={`page-about}`}
      activeClassName={`usa-current`}
      data-cy={`nav-link-page-about`}
    >
      {`About`}
    </LocalizedLink>,
    <LocalizedLink
      to={`/contact`}
      key={`page-contact}`}
      activeClassName={`usa-current`}
      data-cy={`nav-link-page-contact`}
    >
      {`Contact`}
    </LocalizedLink>,
  ];

  // const navLinks = PAGE_ENDPOINTS.map((name, index) => {
  //   let navLinksActiveClassName = `usa-current`;

  //   // This is to address a bug with the nav component from
  //   // Trussworks that keeps the first page as active event
  //   // when navigating to another page
  //   if (index === 0) {
  //     navLinksActiveClassName =
  //       location?.pathname === withPrefix(PAGE_ENDPOINTS[index]) ||
  //       location?.pathname === withPrefix(PAGE_ENDPOINTS_ES[index])
  //         ? `usa-current`
  //         : ``;
  //   }

  //   return (
  //     <LocalizedLink
  //       to={name}
  //       key={`page-${index}`}
  //       activeClassName={navLinksActiveClassName}
  //       data-cy={`nav-link-page-${index}`}
  //     >
  //       {NAV_LINKS_COPY[index]}
  //     </LocalizedLink>
  //   );
  // });

  return (
    <Header basic={true} role={`banner`}>
      {/* Banners */}
      <GovBanner />

      {/* Logo and Navigation */}
      <MainGridContainer>
        <Grid className={styles.logoNavRow} row>
          {/* Logo */}
          <Grid col={1}>
            <LocalizedLink
              to={PAGE_ENDPOINTS[0]}
              key={`first-page`}
              data-cy={`nav-link-first-page`}
            >
              <img
                className={styles.logo}
                src={siteLogo}
                alt={`${logoLine1}`}
              />
            </LocalizedLink>
          </Grid>

          {/* Logo Title */}
          <Grid col={6}>
            <LocalizedLink
              to={PAGE_ENDPOINTS[0]}
              key={`first-page`}
              className="remove-link-style"
              data-cy={`nav-link-first-page`}
            >
              <div className={styles.logoTitle}>{logoLine1}</div>
            </LocalizedLink>
          </Grid>

          {/* Nav links */}
          <Grid col={`fill`} className={styles.navLinks}>
            <NavMenuButton
              key={`mobileMenuButton`}
              onClick={toggleMobileNav}
              label="Menu"
            ></NavMenuButton>
            <PrimaryNav
              className="primary-nav"
              items={navLinks}
              mobileExpanded={mobileNavOpen}
              onToggleMobileNav={toggleMobileNav}
            ></PrimaryNav>
          </Grid>
        </Grid>
      </MainGridContainer>
    </Header>
  );
};

export default AppHeader;
