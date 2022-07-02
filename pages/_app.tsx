import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LayoutType, DefaultLayout } from '@src/components/layouts/index';

function MyApp({
  Component,
  pageProps
}: AppProps & {
  Component: {
    Layout: LayoutType;
  };
}) {
  const Layout = Component.Layout ?? DefaultLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
