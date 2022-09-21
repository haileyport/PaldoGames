import Head from "next/head";

import { useRecoilState } from "recoil";

import { BaseBallMain } from "../../components";
import { Flex } from "../../components/@commons";

const BaseBallGamePage = () => {
  return (
    <>
      <Head>
        <title>숫자야구 게임</title>
        <meta name='description' content='오늘도 즐겜' />
      </Head>
      <BaseBallMain />
    </>
  );
};

export default BaseBallGamePage;
