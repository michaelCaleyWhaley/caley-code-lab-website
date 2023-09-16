/* eslint-disable @next/next/no-page-custom-font */

import Head from 'next/head';

import { Footer } from '../f-ooter';
import { Nav } from '../n-av';

function Layout({
  title = 'Michael Caley Web Developer',
  children,
  pageClass = '',
}: {
  title?: string;
  children: any;
  pageClass?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.ico"
        />
      </Head>

      <Nav pageClass={pageClass} />
      {children}

      <Footer />
    </>
  );
}

export { Layout };
