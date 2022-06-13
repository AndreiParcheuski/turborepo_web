import { NextPage } from 'next';

import { PageContextParams } from '@/shared/types/pageContextParams';

import { getRunningOperationPromises } from '@/store/api/base';
import { getNavItems } from '@/store/api/navItems';
import { setLocale } from '@/store/slices/locale';
import { wrapper } from '@/store/wrapper';

const HomePage: NextPage = () => <span>Home Page</span>;

export const getStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking'
});

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const { regionLang } = params as PageContextParams;

      store.dispatch(getNavItems.initiate({ regionLang }));
      store.dispatch(setLocale(regionLang));

      await Promise.all(getRunningOperationPromises());

      return {
        props: {},
        revalidate: 10
      };
    }
);

export default HomePage;
