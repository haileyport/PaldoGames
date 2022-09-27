import { getSession } from "next-auth/react";
import Head from "next/head";
import { BaseBallMain } from "../../components";

const BaseBallGamePage = () => {
  return (
    <>
      <Head>
        <title>숫자야구 게임</title>
        <meta name="description" content="오늘도 즐겜" />
      </Head>
      <BaseBallMain />
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

export default BaseBallGamePage;
