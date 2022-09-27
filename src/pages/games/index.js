import { getSession } from "next-auth/react";
import Head from "next/head";
import { GamesMain } from "../../components";

const GamesPage = () => {
  console.log("GamePage");

  return (
    <>
      <Head>
        <title>게임공간</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <GamesMain />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default GamesPage;
