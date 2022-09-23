import React, { useEffect, useState } from "react";
import * as M from "./MergeGameMain.style";
import GameBoard from "./GameBoard";
import MergeHeader from "./Header/MergeHeader";
import axios from "axios";

import { useRecoilState, useRecoilValue } from "recoil";
import gameInfo from "./../../../states/gameInfo";
import { currentUserState } from "./../../../states/user";

export const MergeGameMain = () => {
  const [score, setScore] = useState(0);
  const [reset, setReset] = useState(false);

  return (
    <M.StyledMergeMain>
      <MergeHeader score={score} reset={reset} setReset={setReset} />
      <M.Main>
        <GameBoard
          score={score}
          setScore={setScore}
          reset={reset}
          setReset={setReset}
        ></GameBoard>
      </M.Main>
    </M.StyledMergeMain>
  );
};
