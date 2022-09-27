import Head from 'next/head';

import { Layout, Main } from '../components';

export const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>팔도게임즈!</title>
          <meta name='description' content='오늘도 즐겜' />
        </Head>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
