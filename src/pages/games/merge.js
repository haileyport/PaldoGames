import Head from "next/head";

import { MergeGameMain } from "../../components";

const MergeGamePage = () => {
  return (
    <>
      <Head>
        <title>2048 게임</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <MergeGameMain />
    </>
  );
};

export default MergeGamePage;
