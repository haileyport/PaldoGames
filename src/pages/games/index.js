import Head from 'next/head';

import { GamesMain } from '../../components';

const GamesPage = () => {
  return (
    <>
      <Head>
        <title>게임공간</title>
        <meta name='description' content='오늘도 즐겜' />
      </Head>
      <GamesMain />
    </>
  );
};

export default GamesPage;
