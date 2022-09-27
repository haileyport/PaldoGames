import React from "react";
import * as Result from "./Result.style";

const Results = ({ hits, point }) => {
  return (
    <Result.ResultBox>
      <Result.ResultMiniBox>
        <Result.ResultPoint>{point}</Result.ResultPoint>
      </Result.ResultMiniBox>
      {/* <ResultNum>
        <ResultMiniBox>{hits} 개</ResultMiniBox>
        <ResultMiniBox> 맞았습니다.</ResultMiniBox>
      </ResultNum> */}
    </Result.ResultBox>
  );
};

export default Results;
