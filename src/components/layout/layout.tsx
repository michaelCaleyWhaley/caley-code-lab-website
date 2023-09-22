/* eslint-disable @next/next/no-page-custom-font */

// import Head from 'next/head';

import { Footer } from '../footer';
import { Nav } from '../nav';

function Layout({
  children,
  pageClass = '',
}: {
  title?: string;
  children: any;
  pageClass?: string;
}) {
  return (
    <>
      <Nav pageClass={pageClass} />
      {children}

      <Footer />
    </>
  );
}

export { Layout };
