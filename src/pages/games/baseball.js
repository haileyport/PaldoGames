import Head from "next/head";

import { useRecoilState } from "recoil";

import { Layout, BaseBallMain } from "../../components";
import { Button, Flex, P } from "../../components/@commons";

const BaseBallGamePage = () => {
  return (
    <Layout>
      <Head>
        <title>숫자야구 게임</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <Flex flexDirection="column" alignItems="center">
        <BaseBallMain />
      </Flex>
    </Layout>
  );
};

export default BaseBallGamePage;
