import { getSession } from "next-auth/react";
import Head from "next/head";
import { Flex } from "../components/@commons/";
import RankingMain from "../components/Community/Ranking/RankingMain";

const Ranking = () => {
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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
export default Ranking;
