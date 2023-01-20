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

const ScorecardSideNav: React.FC<ScorecardSideNavProps> = ({
  allAgencyNames,
  pathname,
}) => {
  if (isPathInGroupRange(pathname, AGENCY_NAME_RANGE1)) {
    return (
      <SideNav items={groupAgencyLinks(allAgencyNames, AGENCY_NAME_RANGE1)} />
    );
  } else if (isPathInGroupRange(pathname, AGENCY_NAME_RANGE2)) {
    return (
      <SideNav items={groupAgencyLinks(allAgencyNames, AGENCY_NAME_RANGE2)} />
    );
  } else if (isPathInGroupRange(pathname, AGENCY_NAME_RANGE2)) {
    return (
      <SideNav items={groupAgencyLinks(allAgencyNames, AGENCY_NAME_RANGE3)} />
    );
  } else {
    return null;
  }
};

export default ScorecardSideNav;
