import Head from "next/head";

import { LottoMain } from "../../components/Games/Lotto/LottoMain";
import { getSession } from "next-auth/react";

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

export default Lotto;
