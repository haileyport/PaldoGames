import { Layout, Main } from '../components';
import Head from 'next/head';

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
