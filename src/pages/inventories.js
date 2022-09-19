import Head from "next/head";

import { InventoriesMain } from "../components";

const InventoriesPage = () => {
  return (
    <>
      <Head>
        <title>인벤토리</title>
        <meta name='description' content='내가 가진 아이템들' />
      </Head>
      <InventoriesMain />
    </>
  );
};

export default InventoriesPage;
