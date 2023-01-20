import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { LocalizedLink } from 'gatsby-plugin-i18n-l10n';

import {
  Header,
  NavMenuButton,
  PrimaryNav,
  Grid,
  NavDropDownButton,
  MegaMenu,
} from '@trussworks/react-uswds';
import { useWindowSize } from 'react-use';

import MainGridContainer from '@/components/MainGridContainer';
import GovBanner from '@/components/GovBanner';
import {
  AGENCY_NAME_GROUPS,
  AGENCY_NAME_RANGE1,
  AGENCY_NAME_RANGE2,
  AGENCY_NAME_RANGE3,
  NON_DROPDOWN_NAV_LINK_NAMES,
  NON_DROPDOWN_PAGE_ENDPOINTS,
  NUMBER_SUB_NAV_LINKS_PER_COLUMN,
  USWDS_BREAKPOINTS,
} from '@/data/constants';

// @ts-ignore
import siteLogo from '@/static/images/usds-logo.png';
import * as styles from './AppHeader.module.scss';
import { AppHeaderProps, DropDownNavGeneratorProps } from '@/types';
import { chunkArray, toKebabCase } from '../util';

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
   * State variable to hold the open/close state of each dropdown nav link.
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
   * This toggle function will handle toggling of each dropdown nav link.
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
   * Filter the agency names based on the agencyNameRange, then chunk based on
   * NUMBER_SUB_NAV_LINKS_PER_COLUMN. Chunking will define how many agency links
   * (sub-nav links) should go in each column of the sub-nav
   *
   * @param {string[]} allAgencyNames - The array of all agency names.
   * @param {string[]} agencyNameRange - The array of agency names to be filtered.
   * @returns {JSX.Element[][][]} - An array of arrays of JSX elements.
   */
  const groupAndChunkAgencyLinks = (
    allAgencyNames: string[],
    agencyNameRange: string[],
  ) => {
    const groupAgencies = allAgencyNames
      .filter((name) => agencyNameRange.includes(name[0]))
      .map((agencyName) => (
        <Link
          to={`/scorecard/${toKebabCase(agencyName)}`}
          key={`${toKebabCase(agencyName)}`}
          // activeClassName="usa-current"
          data-cy={`nav-link-${toKebabCase(agencyName)}`}
        >
          {agencyName}
        </Link>
      ));

    return groupAgencies.length > NUMBER_SUB_NAV_LINKS_PER_COLUMN
      ? chunkArray(groupAgencies, NUMBER_SUB_NAV_LINKS_PER_COLUMN)
      : [[groupAgencies]];
  };

  /*
   * This component will create all the dropdown nav component
   */
  const DropDownNavGenerator: React.FC<DropDownNavGeneratorProps> = ({
    agencyNameGroup,
    toggleIndex,
    subNavLinksArray,
  }) => {
    const agencyNameGroupLower =
      agencyNameGroup.length > 1
        ? agencyNameGroup.toLowerCase().replace(/\s+/g, ``)
        : agencyNameGroup.toLowerCase();

    return (
      <>
        {/* Add a className of usa-current anytime this component renders when the location of the app is on
      any scorecard page. This will style the nav link with a bottom border */}
        <NavDropDownButton
          className={pathname.includes(`scorecard`) ? `usa-current` : ``}
          key={`nav-drop-down-key-${agencyNameGroupLower}`}
          label={`Agencies ${agencyNameGroup}`}
          menuId={`nav-drop-down-menu-id-${agencyNameGroupLower}`}
          isOpen={isOpen[toggleIndex]}
          onToggle={(): void => onToggle(toggleIndex)}
          data-cy={`nav-dropdown-scorecard-nav-${agencyNameGroupLower}`}
        ></NavDropDownButton>
        <MegaMenu
          id={`mega-menu-id-${agencyNameGroupLower}`}
          // type="subnav"
          items={subNavLinksArray}
          isOpen={isOpen[toggleIndex]}
        ></MegaMenu>
      </>
    );
  };

  /**
   * Create all non-dropdown links for the navigation bar
   */
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

  /**
   * Splice in the dropdown nav links into non-dropdown nav links
   */
  navLinks.splice(
    1,
    0,
    <DropDownNavGenerator
      agencyNameGroup={AGENCY_NAME_GROUPS[0]}
      toggleIndex={0}
      subNavLinksArray={groupAndChunkAgencyLinks(
        allAgencyNames,
        AGENCY_NAME_RANGE1,
      )}
    />,
    <DropDownNavGenerator
      agencyNameGroup={AGENCY_NAME_GROUPS[1]}
      toggleIndex={1}
      subNavLinksArray={groupAndChunkAgencyLinks(
        allAgencyNames,
        AGENCY_NAME_RANGE2,
      )}
    />,
    <DropDownNavGenerator
      agencyNameGroup={AGENCY_NAME_GROUPS[2]}
      toggleIndex={2}
      subNavLinksArray={groupAndChunkAgencyLinks(
        allAgencyNames,
        AGENCY_NAME_RANGE3,
      )}
    />,
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
              <img className={styles.logo} src={siteLogo} alt={`Site logo`} />
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
