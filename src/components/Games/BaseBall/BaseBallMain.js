import React, { useEffect, useState } from "react";
import { CurrentBaseBall } from "./CurrentBaseBall";
import GetNumber from "./GetNumber";

import gameInfo from "./../../../states/gameInfo";
import { useRecoilState } from "recoil";

import * as B from "./BaseBallMain.style";

const BaseBallMain = () => {
  const [result, setResult] = useState("숫자 4개를 맞추면 우승입니다⚾");
  const [answer, setAnswer] = useState(GetNumber());
  const [game, setGame] = useRecoilState(gameInfo);

  useEffect(() => {
    setGame({
      game: {
        name: "baseball",
        answer: answer,
      },
      ...game,
    });
  }, [answer]);

  return (
    <B.StyledBaseBallMain>
      <B.TitleDiv>
        <B.HeadTitle>숫자야구</B.HeadTitle>
        <B.Discription>{result}</B.Discription>
        <CurrentBaseBall
          answer={answer}
          setAnswer={setAnswer}
          result={result}
          setResult={setResult}
        />
      </B.TitleDiv>
      <B.Bottom>
        <B.BottomSpan>No.</B.BottomSpan>
        <B.BottomSpan>Result</B.BottomSpan>
        <B.BottomSpan>History</B.BottomSpan>
      </B.Bottom>
    </B.StyledBaseBallMain>
  );
};

export { BaseBallMain };
