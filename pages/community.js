import Head from 'next/head';

import { Layout, CommunityMain, Footer } from '../src/components';

const CommunityPage = () => {
  return (
    <Layout>
      <Head>
        <title>커뮤니티공간</title>
        <meta name='description' content='커뮤니티' />
      </Head>
      <CommunityMain></CommunityMain>
      <Footer />
    </Layout>
  );
};

export default CommunityPage;
