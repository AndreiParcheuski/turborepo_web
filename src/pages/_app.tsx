import type { AppProps } from 'next/app';
import '@/styles/globals.css';

import Layout from '@/modules/Layout';

import Seo from '@/shared/components/Seo';

import { wrapper } from '@/store/wrapper';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Seo />

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default wrapper.withRedux(App);
