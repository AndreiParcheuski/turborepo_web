import { NextPage } from 'next';

const RootPage: NextPage = () => null;

export const getServerSideProps = async () => ({
  redirect: { destination: '/default' }
});

export default RootPage;
