import React from 'react';
import { SideNav } from '@trussworks/react-uswds';

// import * as styles from './ScorecardSideNav.module.scss';

import { ScorecardSideNavProps } from '@/types';
import { groupAgencyLinks } from '../AppHeader/AppHeader';
import {
  AGENCY_NAME_RANGE1,
  AGENCY_NAME_RANGE2,
  AGENCY_NAME_RANGE3,
} from '@/data/constants';
import { isPathInGroupRange } from '../util';

import * as styles from './ScorecardSideNav.module.scss';

const ScorecardSideNav: React.FC<ScorecardSideNavProps> = ({
  allAgencyNames,
  pathname,
}) => {
  if (isPathInGroupRange(pathname, AGENCY_NAME_RANGE1)) {
    return (
      <div className={styles.scorecardSideNavContainer}>
        <SideNav items={groupAgencyLinks(allAgencyNames, AGENCY_NAME_RANGE1)} />
      </div>
    );
  } else if (isPathInGroupRange(pathname, AGENCY_NAME_RANGE2)) {
    return (
      <div className={styles.scorecardSideNavContainer}>
        <SideNav items={groupAgencyLinks(allAgencyNames, AGENCY_NAME_RANGE2)} />
      </div>
    );
  } else if (isPathInGroupRange(pathname, AGENCY_NAME_RANGE3)) {
    return (
      <div className={styles.scorecardSideNavContainer}>
        <SideNav items={groupAgencyLinks(allAgencyNames, AGENCY_NAME_RANGE3)} />
      </div>
    );
  } else {
    return null;
  }
};

export default ScorecardSideNav;
