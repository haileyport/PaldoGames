import React from "react";
import { GamesResult } from "./../../components/Games/GamesResult/GamesResult";
import { gameInfo } from "../../states";
import { useRecoilState } from "recoil";

import { Layout } from "../../components";
import { Button, Flex, P } from "../../components/@commons";

const Result = () => {
  const [game, setGame] = useRecoilState(gameInfo);
  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center">
        <GamesResult game={game.game} point={game.point} />
      </Flex>
    </Layout>
  );
};

export default Result;
