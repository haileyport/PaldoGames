import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Main } from "../components";
import { modalStates } from "../states";

export const Home = ({ session }) => {
  const router = useRouter();
  const [modal, setModal] = useRecoilState(modalStates);

  useEffect(() => {
    if (!session) {
      setModal({ ...modal, login: true });
    } else {
      router.push("/");
    }
  }, [modal, router, session, setModal]);

  console.log("LoginPage", session);

  return (
    <>
      <Head>
        <title>팔도게임즈!</title>
        <meta name='description' content='로그인 페이지' />
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
