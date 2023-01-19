import { useState } from 'react';
import { Link, navigate } from 'gatsby';
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
import { NAV_LINKS_NAMES, PAGE_ENDPOINTS } from '@/data/constants';

// @ts-ignore
import siteLogo from '@/static/images/usds-logo.png';
import * as styles from './AppHeader.module.scss';
import { IAppHeader } from '@/types';
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
const AppHeader = ({ pathname, allAgencyNames }: IAppHeader) => {
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

  const ScorecardNavSubLinks = [
    <Link
      to={`/`}
      key={`scorecards}`}
      // activeClassName="usa-current"
      data-cy={`nav-link-scorecards`}
    >
      {`Scorecards`}
    </Link>,
    ...agencyLinks,
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
        items={ScorecardNavSubLinks}
        isOpen={isOpen[0]}
      ></Menu>
    </>
  );

  const navLinks = PAGE_ENDPOINTS.map((endpoint, index) => {
    return index === 0 ? (
      <ScorecardNav key="scorecardNav" />
    ) : (
      <LocalizedLink
        to={endpoint}
        key={`page-${endpoint.substring(1)}`}
        activeClassName={`usa-current`}
        data-cy={`nav-link-page-${endpoint.substring(1)}`}
      >
        {NAV_LINKS_NAMES[index]}
      </LocalizedLink>
    );
  });

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
            ></PrimaryNav>
          </Grid>
        </Grid>
      </MainGridContainer>
    </Header>
  );
};

export default AppHeader;
