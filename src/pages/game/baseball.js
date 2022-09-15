import { useState, useRef } from "react";
import Balls from "./Balls";
import styled from "styled-components";

const HistoryDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

function BaseBall() {
  // 랜덤으로 정답을 생성하는 함수
  const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i = 0; i < 4; i += 1) {
      const chosen = candidates.splice(
        Math.floor(Math.random() * (9 - i)),
        1
      )[0];
      array.push(chosen);
    }
    return array;
  };

  // 상태관리 변수
  const inputEl = useRef(null);
  const [answer, setAnswer] = useState(getNumbers());
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [tries, setTries] = useState([]);
  const [reTry, setReTry] = useState(false);

  // 정답 제출 함수
  const onSubmit = (e) => {
    e.preventDefault();
    const input = inputEl.current;
    // 자릿수가 모자란 경우
    if (value.length < 4) {
      setResult("정답은 4자리로 작성해주세요.");
      return;
    }

    // dev 확인용 콘솔 - production 시 삭제!
    console.log("답은", answer.join(""));

    // 정답 비교 로직
    if (value === answer.join("")) {
      //정답
      setTries((t) => [
        ...t,
        {
          try: value,
          strike: 4,
          ball: 0,
          result: "홈런⚾!",
        },
      ]);
      setResult("홈런⚾!");
      setReTry(true);
    } else {
      // 정답 X
      const answerArray = value.split("").map((v) => parseInt(v));
      if (tries.length >= 9) {
        // 시도 초과
        setResult(`10번 넘게 틀려서 실패😥 답은 ${answer.join("")}입니다😎`);
        setReTry(true);
      } else {
        // 시도 초과 아닐 때
        setResult("");
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((t) => [
          ...t,
          {
            try: value,
            strike: strike,
            ball: ball,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          },
        ]);
        setValue("");
        if (input) {
          input.focus();
        }
      }
    }
  };

  const light = (strike, ball) => {
    let words = "green ".repeat(strike);
    words += "orange ".repeat(ball);
    words += "red ".repeat(4 - strike - ball);
    const res = words.split(" ");
    return res;
  };

  const handleRetry = (e) => {
    e.preventDefault();
    const input = inputEl.current;
    setValue("");
    setAnswer(getNumbers());
    setTries([]);
    setResult("");
    setReTry(false);
    if (input) {
      input.focus();
    }
  };

  return (
    <div>
      <div>
        <h1>숫자야구</h1>
      </div>
      <div>
        <div>숫자 4개를 맞추면 우승입니다⚾</div>
        <form onSubmit={onSubmit}>
          <input
            ref={inputEl}
            maxLength={4}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>입력</button>
        </form>
        <div>
          <div>시도: {tries.length}/10</div>
          <ul>
            {tries.map((v, i) => (
              <HistoryDiv>
                <span>{i + 1}차 시도</span>
                {light(v.strike, v.ball).map((el) => {
                  return <Balls background={el} />;
                })}
                <RightInfo>
                  <span>{v.try}</span>
                  <span>{v.result}</span>
                </RightInfo>
              </HistoryDiv>
            ))}
          </ul>
        </div>
        {result.length > 0 ? <div>{result}</div> : <></>}
        {reTry ? <button onClick={handleRetry}>다시하기</button> : <></>}
      </div>
    </div>
  );
}

export default BaseBall;
