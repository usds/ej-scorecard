import React from 'react';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import SEO from '@/components/SEO';
import { LayoutProps } from '@/types';

// import * as styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({
  children,
  pathname,
  title,
  keywords,
  description,
  allAgencyNames,
}) => {
  return (
    <>
      <SEO title={title} keywords={keywords} description={description} />
      <AppHeader pathname={pathname} allAgencyNames={allAgencyNames} />
      <main id={`main-content`}>{children}</main>
      <AppFooter />
    </>
  );
};

export default Layout;
