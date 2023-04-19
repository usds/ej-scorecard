import React from 'react';
import { SideNav } from '@trussworks/react-uswds';

// import * as styles from './ScorecardSideNav.module.scss';

import { ScorecardSideNavProps } from '@/types';
import { groupAgencyLinks } from '../AppHeader/AppHeader';
import { AGENCY_GROUPS } from '@/data/constants';
import { isPathInGroupRange } from '../util';

import * as styles from './ScorecardSideNav.module.scss';

const ScorecardSideNav: React.FC<ScorecardSideNavProps> = ({
  allAgencyNames,
  pathname,
}) => {
  const matchedGroup = AGENCY_GROUPS.find((group) =>
    isPathInGroupRange(pathname, group.range),
  );

  if (matchedGroup) {
    return (
      <div className={styles.scorecardSideNavContainer}>
        <SideNav items={groupAgencyLinks(allAgencyNames, matchedGroup.range)} />
      </div>
    );
  } else {
    return null;
  }
};

export default ScorecardSideNav;
