import AppHeader from '@/components/AppHeader';
import SEO from '@/components/SEO';
import { ILayoutProps } from '@/types';

// import * as styles from './Layout.module.scss';

const Layout = ({ children, pathname, title }: ILayoutProps) => {
  return (
    <>
      <SEO title={title} />
      <AppHeader pathname={pathname} />
      <main id={`main-content`}>{children}</main>
    </>
  );
};

export default Layout;
