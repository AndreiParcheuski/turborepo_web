import type { AppProps } from 'next/app';

import { wrapper } from '@src/redux/wrapper';
import '../styles/globals.css';

const App = ({
  Component,
  pageProps,
}: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(App);
