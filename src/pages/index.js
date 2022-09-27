import axios from "axios";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import { Main } from "../components";
import { useRecoilValue } from "recoil";
import { currentUserState } from "./../states/user";

export const Home = ({ session }) => {
  const { user } = useRecoilValue(currentUserState);

  const newTable = async () => {
    const userId = user.id;
    const res = await axios.get(`/api/game/${userId}`, { userId });
    console.log(res);
    if (!res) {
      const id = user.id;
      await axios.post(`/api/game`, { id });
    }
  };

  useEffect(() => {
    if (session) {
      newTable();
    }
  }, [session]);

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
