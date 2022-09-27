import React, { useState } from "react";
import * as M from "./MergeGameMain.style";
import GameBoard from "./GameBoard";
import MergeHeader from "./Header/MergeHeader";

export const MergeGameMain = () => {
  const [reset, setReset] = useState(false);

  return (
    <M.StyledMergeMain>
      <MergeHeader reset={reset} setReset={setReset} />
      <M.Main>
        <GameBoard reset={reset} setReset={setReset}></GameBoard>
      </M.Main>
    </M.StyledMergeMain>
  );
};
