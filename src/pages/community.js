import Head from "next/head";
import { getSession } from "next-auth/react";
import { CommunityMain } from "../components";

const CommunityPage = ({ postList }) => {
  return (
    <>
      <Head>
        <title>커뮤니티공간</title>
        <meta name='description' content='커뮤니티' />
      </Head>
      <CommunityMain postList={postList}></CommunityMain>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const postRes = await fetch("https://paldo-games.vercel.app/api/community");
  const postDataObj = await postRes.json();
  const postData = postDataObj.response;

  const userRes = await fetch("https://paldo-games.vercel.app/api/user");

  const userDataObj = await userRes.json();

  const postList = [];
  const { users } = userDataObj;

  postData.map((data) => {
    const { id, title, content, editor } = data;

    // user 값을 넣어주기 위해
    users.map((user) => {
      if (user.id === editor) {
        postList.unshift({ id, title, content, editor, writer: user });
      }
    });
  });

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
      postList,
    },
  };
}

export default CommunityPage;
