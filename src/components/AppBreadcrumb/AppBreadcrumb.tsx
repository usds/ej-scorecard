import {
  Breadcrumb,
  BreadcrumbBar,
  BreadcrumbLink,
} from '@trussworks/react-uswds';
import React from 'react';

// import * as styles from './AppBreadcrumb.module.scss';

import { AppBreadcrumbProps } from '@/types';
import { Link } from 'gatsby';

const AppBreadcrumb: React.FC<AppBreadcrumbProps> = ({ agencyName }) => {
  return (
    <BreadcrumbBar>
      <Breadcrumb>
        <BreadcrumbLink href="/scorecard">
          <Link to={`/scorecard`} activeClassName={`usa-current`}>
            Scorecard
          </Link>
        </BreadcrumbLink>
      </Breadcrumb>
      <Breadcrumb>{agencyName}</Breadcrumb>
    </BreadcrumbBar>
  );
};

export default AppBreadcrumb;
