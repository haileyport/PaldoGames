import Head from "next/head";
import { getSession } from "next-auth/react";
import { MergeGameMain } from "../../components";

const MergeGamePage = () => {
  return (
    <>
      <Head>
        <title>2048 게임</title>
        <meta name='description' content='오늘도 즐겜' />
      </Head>
      <MergeGameMain />
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

export default MergeGamePage;
