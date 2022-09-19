import Head from 'next/head';

import { GamesMain, Layout } from '../../components';

const GamesPage = () => {
  return (
    <Layout>
      <Head>
        <title>게임공간</title>
        <meta name='description' content='오늘도 즐겜' />
      </Head>
      <GamesMain />
    </Layout>
  );
};

export default GamesPage;
