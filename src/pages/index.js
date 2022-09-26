import { getSession } from "next-auth/react";
import Head from "next/head";
import { Main } from "../components";

export const Home = ({ session }) => {
  return (
    <>
      <Head>
        <title>팔도게임즈!</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <Main />
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

export default Home;
