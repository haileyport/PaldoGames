import Head from 'next/head';

import { InventoriesMain, Layout } from '../src/components';

const InventoriesPage = () => {
  return (
    <Layout>
      <Head>
        <title>인벤토리</title>
        <meta name='description' content='내가 가진 아이템들' />
      </Head>
      <InventoriesMain />
    </Layout>
  );
};

export default InventoriesPage;
