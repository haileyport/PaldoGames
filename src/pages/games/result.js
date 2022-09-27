import React from "react";
import { GamesResult } from "./../../components/Games/GamesResult/GamesResult";
import { gameInfo } from "../../states";
import { useRecoilState } from "recoil";
import { Flex } from "../../components/@commons";
import { getSession } from "next-auth/react";

const Result = () => {
  const [game, setGame] = useRecoilState(gameInfo);
  return (
    <Flex flexDirection='column' alignItems='center'>
      <GamesResult game={game.game} point={game.point} />
    </Flex>
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

export default Result;
