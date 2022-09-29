import axios from "axios";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { GamesMain } from "../../components";
import { currentUserState } from "../../states";

const GamesPage = () => {
  const { user } = useRecoilValue(currentUserState);
  const router = useRouter();

  const fetchTotalPoint = useCallback(async () => {
    const { data } = await axios.get(`/api/game/${user.id}`);

    if (!data.response) {
      const id = user.id;
      const res = await axios.post(`/api/game`, {
        id: id,
      });
    }

    let point;

    if (data.response) {
      point = data.response.totalPoint;

      return point;
    }
  }, [user.id]);

  useEffect(() => {
    fetchTotalPoint().then((totalPoint) => {
      if (totalPoint < 100 && totalPoint !== undefined) {
        router.push("/");
        alert("현재 보유 포인트가 100 포인트보다 작습니다.");
      }
    });
  }, [fetchTotalPoint, router]);

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

  return {
    props: {
      session,
    },
  };
}

export default GamesPage;
