import Head from 'next/head';

import { Main } from '../components';

export const Home = () => {
  return (
    <>
      <Head>
        <title>팔도게임즈!</title>
        <meta name='description' content='오늘도 즐겜' />
      </Head>
      <Main />
    </>
  );
};

export default Home;
