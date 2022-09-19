import Head from "next/head";

import { Layout } from "../components/Home/Layout/Layout";
import { Main } from "../components/Home/Main/Main";

export const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>팔도게임즈!</title>
          <meta name="description" content="오늘도 즐겜" />
        </Head>
        <Main />
      </Layout>
    </>
  );
};

export default Home;
