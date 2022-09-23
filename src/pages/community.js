import Head from "next/head";
import { getSession } from "next-auth/react";

import { CommunityMain, Footer } from "../components";
const CommunityPage = ({ session, postDataObj, userDataObj }) => {
  console.log("CommunityPage", session);

  return (
    <>
      <Head>
        <title>커뮤니티공간</title>
        <meta name='description' content='커뮤니티' />
      </Head>
      <CommunityMain postDataObj={postDataObj} userDataObj={userDataObj}></CommunityMain>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const postRes = await fetch("http://localhost:3000/api/community");
  const postDataObj = await postRes.json();

  const userRes = await fetch("http://localhost:3000/api/user");
  const userDataObj = await userRes.json();

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
      postDataObj,
      userDataObj,
    },
  };
}

export default CommunityPage;
