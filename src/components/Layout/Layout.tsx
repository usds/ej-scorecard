import React from 'react';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import MainGridContainer from '@/components/MainGridContainer';
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
      <MainGridContainer className={`footer`} fullWidth={true}>
        <AppFooter />
      </MainGridContainer>
    </>
  );
};

export default Layout;
