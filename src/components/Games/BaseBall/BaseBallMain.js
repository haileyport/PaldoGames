import React, { useState } from "react";
import { CurrentBaseBall } from "./CurrentBaseBall";
import * as B from "./BaseBallMain.style";

const BaseBallMain = () => {
  const [result, setResult] = useState("숫자 4개를 맞추면 우승입니다⚾");
  return (
    <B.StyledBaseBallMain>
      <B.TitleDiv>
        <B.HeadTitle>숫자야구</B.HeadTitle>
        <B.Discription>{result}</B.Discription>
        <CurrentBaseBall result={result} setResult={setResult} />
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
