import React, { ReactNode, useState } from 'react';
import { Link } from 'gatsby';
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
  AGENCY_GROUPS,
  NON_DROPDOWN_NAV_LINK_NAMES,
  NON_DROPDOWN_PAGE_ENDPOINTS,
  NUMBER_SUB_NAV_LINKS_PER_COLUMN,
  USWDS_BREAKPOINTS,
} from '@/data/constants';

// @ts-ignore
import scorecardLogo from '@/static/images/ejscorecard-logo.png';
import * as styles from './AppHeader.module.scss';
import { AppHeaderProps, DropDownNavGeneratorProps } from '@/types';
import { chunkArray, isPathInGroupRange, toKebabCase } from '../util';

/**
 * Group the agency links based on the agencyNameRange
 *
 * @param {string[]} allAgencyNames - The array of all agency names.
 * @param {string[]} agencyNameRange - The array of agency names to be filtered.
 * @returns {React.ReactNode[]} - An array of arrays of Link elements.
 */
export const groupAgencyLinks = (
  allAgencyNames: string[],
  agencyNameRange: string[],
) => {
  return allAgencyNames
    .filter((name) => agencyNameRange.includes(name[0]))
    .map((agencyName) => (
      <Link
        to={`/scorecard/${toKebabCase(agencyName)}`}
        key={`${toKebabCase(agencyName)}`}
        activeClassName="usa-current"
        data-cy={`nav-link-${toKebabCase(agencyName)}`}
      >
        {agencyName}
      </Link>
    ));
};

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
  const initialDropDownState: boolean[] = Array(AGENCY_GROUPS.length).fill(
    false,
  );

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
  const [isOpen, setIsOpen] = useState(initialDropDownState);

  /**
   * The dropdown nav elements don't automatically close when
   * clicking on non-dropdown nav elements. This onClick handler
   * fixes that
   *
   * @param event
   */
  const onNavClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLAnchorElement) {
      setIsOpen(initialDropDownState);
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
     * are still open
     */
    if (width > USWDS_BREAKPOINTS.DESKTOP) {
      const newIsOpen = initialDropDownState.slice();
      newIsOpen[index] = true;
      setIsOpen(newIsOpen);
    }
  };

  const chunkAgencyLinks = (groupAgencies: ReactNode[]) => {
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
    agencyGroupRange,
  }) => {
    // shorten and lower case the name group
    const agencyNameGroupLower =
      agencyNameGroup.length > 1
        ? agencyNameGroup.toLowerCase().replace(/\s+/g, ``)
        : agencyNameGroup.toLowerCase();

    return (
      <>
        {/* Add a className of usa-current anytime if the path is in the group range */}
        <NavDropDownButton
          className={
            isPathInGroupRange(pathname, agencyGroupRange) ? `usa-current` : ``
          }
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
      activeClassName={pathname === endpoint ? `usa-current` : ``}
      data-cy={`nav-link-page-${endpoint.substring(1)}`}
    >
      {NON_DROPDOWN_NAV_LINK_NAMES[index]}
    </LocalizedLink>
  ));

  /**
   * Splice in the dropdown nav links into non-dropdown nav links.
   * The SubNavLinksArray will be first grouped by Agency link,
   * following by chunking.
   */

  const dropDownNavGenerators = AGENCY_GROUPS.map(
    (group: { nameGroup: string; range: string[] }, i: number) => {
      const { nameGroup, range } = group;
      const toggleIndex = i;
      const subNavLinksArray = chunkAgencyLinks(
        groupAgencyLinks(allAgencyNames, range),
      );
      return (
        <DropDownNavGenerator
          key={nameGroup}
          agencyNameGroup={nameGroup}
          toggleIndex={toggleIndex}
          subNavLinksArray={subNavLinksArray}
          agencyGroupRange={range}
        />
      );
    },
  );

  navLinks.splice(1, 0, ...dropDownNavGenerators);

  return (
    <Header basic={true} role={`banner`}>
      {/* Banners */}
      <GovBanner />

      {/* Logo  */}
      <MainGridContainer fullWidth={true} className="logo-container">
        <Grid className={styles.logoRow} row>
          <LocalizedLink
            to={NON_DROPDOWN_PAGE_ENDPOINTS[0]}
            className={styles.logo}
            key={`first-page`}
            data-cy={`nav-link-first-page`}
          >
            <img
              className={styles.logo}
              src={scorecardLogo}
              alt={`Site logo`}
            />
          </LocalizedLink>
        </Grid>
      </MainGridContainer>

      {/* Navigation */}
      <MainGridContainer fullWidth={true} className="nav-row-container">
        <div className={styles.navRow}>
          {/* Nav links */}
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
        </div>
      </MainGridContainer>
    </Header>
  );
};

export default AppHeader;
