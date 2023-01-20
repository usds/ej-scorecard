import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';

import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
  NavDropDownButton,
  // Menu,
  MegaMenu,
} from '@trussworks/react-uswds';
import { useWindowSize } from 'react-use';

import MainGridContainer from '@/components/MainGridContainer';
import GovBanner from '@/components/GovBanner';
import {
  NON_DROPDOWN_NAV_LINK_NAMES,
  NON_DROPDOWN_PAGE_ENDPOINTS,
  USWDS_BREAKPOINTS,
} from '@/data/constants';

// @ts-ignore
import siteLogo from '@/static/images/usds-logo.png';
import * as styles from './AppHeader.module.scss';
import { AppHeaderProps } from '@/types';
import { toKebabCase } from '../util';

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
const AppHeader: React.FC<AppHeaderProps> = ({ pathname, allAgencyNames }) => {
  const { width } = useWindowSize();

  /**
   * State variable to control the toggling of mobile menu button
   */
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = (): void => {
    setMobileNavOpen((prevOpen) => !prevOpen);
  };

  /**
   * State variable to hold the open/close state of each nav dropdown.
   */
  const [isOpen, setIsOpen] = useState([false, false, false]);

  /**
   * The dropdown nav elements don't automatically close when
   * clicking on non-dropdown nav elements. This onClick handler
   * fixes that
   *
   * @param event
   */
  const onNavClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLAnchorElement) {
      setIsOpen([false, false, false]);
    }
  };

  /**
   * This toggle function will handle toggling of dropdown navs.
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
    if (width > USWDS_BREAKPOINTS.DESKTOP) {
      if (index === 0) {
        if (isOpen[1] === true) {
          setIsOpen([isOpen[1], false, false]);
        }
        if (isOpen[2] === true) {
          setIsOpen([isOpen[2], false, false]);
        }
      } else if (index === 1) {
        if (isOpen[0] === true) {
          setIsOpen([false, isOpen[0], false]);
        }
        if (isOpen[2] === true) {
          setIsOpen([false, isOpen[2], false]);
        }
      } else if (index === 2) {
        if (isOpen[0] === true) {
          setIsOpen([false, false, isOpen[0]]);
        }
        if (isOpen[1] === true) {
          setIsOpen([false, false, isOpen[1]]);
        }
      }
    }
  };

  /**
   * Dynamically create all the subnav links to each agency page
   */
  const agencyLinks = allAgencyNames.map((agencyName) => (
    <Link
      to={`/scorecard/${toKebabCase(agencyName)}`}
      key={`${toKebabCase(agencyName)}`}
      // activeClassName="usa-current"
      data-cy={`nav-link-${toKebabCase(agencyName)}`}
    >
      {agencyName}
    </Link>
  ));

  const ScorecardSubNavLinksA2E = [
    [
      <Link
        to={`/`}
        key={`scorecards}`}
        // activeClassName="usa-current"
        data-cy={`nav-link-scorecards`}
      >
        {`Scorecards`}
      </Link>,
      ...agencyLinks,
    ],
  ];

  const ScorecardSubNavLinksD = [
    [
      <Link
        to={`/`}
        key={`scorecards}`}
        // activeClassName="usa-current"
        data-cy={`nav-link-scorecards`}
      >
        {`Scorecards`}
      </Link>,
      ...agencyLinks,
    ],
    [
      <Link
        to={`/`}
        key={`scorecards}`}
        // activeClassName="usa-current"
        data-cy={`nav-link-scorecards`}
      >
        {`Scorecards`}
      </Link>,
      ...agencyLinks,
    ],
  ];

  const ScorecardSubNavLinksH2V = [
    [
      <Link
        to={`/`}
        key={`scorecards}`}
        // activeClassName="usa-current"
        data-cy={`nav-link-scorecards`}
      >
        {`Scorecards`}
      </Link>,
      ...agencyLinks,
    ],
    [
      <Link
        to={`/`}
        key={`scorecards}`}
        // activeClassName="usa-current"
        data-cy={`nav-link-scorecards`}
      >
        {`Scorecards`}
      </Link>,
    ],
  ];

  // Todo: create these dynamically
  const ScorecardNavA2E = () => (
    <>
      {/* Add a className of usa-current anytime this component renders when the location of the app is on
      any scorecard page. This will style the nav link with a bottom border */}
      <NavDropDownButton
        className={pathname.includes(`scorecard`) ? `usa-current` : ``}
        key="scorecardNavA2EDropDown"
        label={`Agencies A - E`}
        menuId="scorecardMenuA2E"
        isOpen={isOpen[0]}
        onToggle={(): void => onToggle(0)}
        data-cy={`nav-dropdown-scorecard-nav-a2e`}
      ></NavDropDownButton>
      <MegaMenu
        id="scorecardMenuA2E"
        // type="subnav"
        items={ScorecardSubNavLinksA2E}
        isOpen={isOpen[0]}
      ></MegaMenu>
    </>
  );
  const ScorecardNavH2V = () => (
    <>
      {/* Add a className of usa-current anytime this component renders when the location of the app is on
      any scorecard page. This will style the nav link with a bottom border */}
      <NavDropDownButton
        className={pathname.includes(`scorecard`) ? `usa-current` : ``}
        key="scorecardNavH2VDropDown"
        label={`Agencies H - V`}
        menuId="scorecardMenuH2V"
        isOpen={isOpen[1]}
        onToggle={(): void => onToggle(1)}
        data-cy={`nav-dropdown-scorecard-nav-h2v`}
      ></NavDropDownButton>
      <MegaMenu
        id="scorecardMenuH2V"
        // type="subnav"
        items={ScorecardSubNavLinksH2V}
        isOpen={isOpen[1]}
      ></MegaMenu>
    </>
  );

  const ScorecardNavD = () => (
    <>
      {/* Add a className of usa-current anytime this component renders when the location of the app is on
      any scorecard page. This will style the nav link with a bottom border */}
      <NavDropDownButton
        className={pathname.includes(`scorecard`) ? `usa-current` : ``}
        key="scorecardNavD_DropDown"
        label={`Agency D`}
        menuId="scorecardMenuD"
        isOpen={isOpen[2]}
        onToggle={(): void => onToggle(2)}
        data-cy={`nav-dropdown-scorecard-nav-d`}
      ></NavDropDownButton>
      <MegaMenu
        id="scorecardMenuD"
        // type="subnav"
        items={ScorecardSubNavLinksD}
        isOpen={isOpen[2]}
      ></MegaMenu>
    </>
  );

  const navLinks = NON_DROPDOWN_PAGE_ENDPOINTS.map((endpoint, index) => (
    <LocalizedLink
      to={endpoint}
      key={`page-${endpoint.substring(1)}`}
      activeClassName={`usa-current`}
      data-cy={`nav-link-page-${endpoint.substring(1)}`}
    >
      {NON_DROPDOWN_NAV_LINK_NAMES[index]}
    </LocalizedLink>
  ));

  navLinks.splice(
    1,
    0,
    <ScorecardNavA2E key="scorecardNavA2E" />,
    <ScorecardNavD key="scorecardNavD" />,
    <ScorecardNavH2V key="scorecardNavH2V" />,
  );

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
              to={NON_DROPDOWN_PAGE_ENDPOINTS[0]}
              key={`first-page`}
              data-cy={`nav-link-first-page`}
            >
              <img className={styles.logo} src={siteLogo} />
            </LocalizedLink>
          </Grid>

          {/* Logo Title */}
          <Grid col={6}>
            <div className={styles.logoTitle} onClick={() => navigate(`/`)}>
              {`ENVIRONMENTAL JUSTICE.GOV`}
            </div>
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
              onClick={(e) => onNavClick(e)}
            ></PrimaryNav>
          </Grid>
        </Grid>
      </MainGridContainer>
    </Header>
  );
};

export default AppHeader;
