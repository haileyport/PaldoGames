import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { GamesMain } from "../../components";

const GamesPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <>
        <Head>
          <title>게임공간</title>
          <meta name="description" content="오늘도 즐겜" />
        </Head>
        <GamesMain />
      </>
    );
  } else {
    alert("로그인 후 이용 가능합니다.");
    router.push("/");
  }
};

export default GamesPage;
