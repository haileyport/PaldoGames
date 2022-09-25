import Head from "next/head";
import { Flex } from "../components/@commons/";
import RankingMain from "../components/Community/Ranking/RankingMain";

const Ranking = ({ userDataObj }) => {
  return (
    <>
      <Head>
        <title>랭킹</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <Flex flexDirection="column" alignItems="center">
        <RankingMain />
      </Flex>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/user");
  const userDataObj = await res.json();

  return {
    props: {
      userDataObj,
    },
  };
}

export default Ranking;
