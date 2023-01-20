import React from 'react';
import AppHeader from '@/components/AppHeader';
import SEO from '@/components/SEO';
import { LayoutProps } from '@/types';

// import * as styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({
  children,
  pathname,
  title,
  allAgencyNames,
}) => {
  return (
    <>
      <SEO title={title} />
      <AppHeader pathname={pathname} allAgencyNames={allAgencyNames} />
      <main id={`main-content`}>{children}</main>
    </>
  );
};

export default Layout;
