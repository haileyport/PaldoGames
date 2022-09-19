import Head from "next/head";

import { CommunityMain, Footer } from "../components";

const CommunityPage = () => {
  return (
    <>
      <Head>
        <title>커뮤니티공간</title>
        <meta name='description' content='커뮤니티' />
      </Head>
      <CommunityMain></CommunityMain>
      <Footer />
    </>
  );
};

export default CommunityPage;
