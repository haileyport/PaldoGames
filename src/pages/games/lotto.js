import Head from "next/head";

import { LottoMain } from "../../components/Games/Lotto/LottoMain";
import { Flex } from "../../components/@commons";

const Lotto = () => {
  return (
    <>
      <Head>
        <title>로또</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <LottoMain />
    </>
  );
};

export default Lotto;
