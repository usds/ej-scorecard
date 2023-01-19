import AppHeader from '@/components/AppHeader';
import SEO from '@/components/SEO';
import { ILayoutProps } from '@/types';

// import * as styles from './Layout.module.scss';

const Layout = ({
  children,
  pathname,
  title,
  allAgencyNames,
}: ILayoutProps) => {
  return (
    <>
      <SEO title={title} />
      <AppHeader pathname={pathname} allAgencyNames={allAgencyNames} />
      <main id={`main-content`}>{children}</main>
    </>
  );
};

export default Layout;
