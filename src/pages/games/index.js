import Head from "next/head";
import { getSession } from "next-auth/react";

import { GamesMain } from "../../components";

const GamesPage = ({ session }) => {
  console.log("GamePage", session);

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

export default GamesPage;
