import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import gameInfo from "./../../../states/gameInfo";

import Balls from "./Balls";
import GetNumber from "./GetNumber";
import * as B from "./BaseBallMain.style";

export const CurrentBaseBall = ({ answer, setAnswer, result, setResult }) => {
  // 상태관리 변수
  const inputEl = useRef(null);
  const [value, setValue] = useState("");
  const [tries, setTries] = useState([]);
  const [reTry, setReTry] = useState(false);
  const [game, setGame] = useRecoilState(gameInfo);

  const router = useRouter();

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
        },
      ]);
      setResult("홈런");
      setReTry(true);
    } else {
      // 정답 X
      const answerArray = value.split("").map((v) => parseInt(v));

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
        },
      ]);
      setValue("");
      if (input) {
        input.focus();
      }
      if (tries.length >= 9) {
        // 시도 초과
        setResult(`10번 넘게 틀려서 실패😥 답은 ${answer.join("")}입니다😎`);
        setReTry(true);
      } else {
        // 시도 초과 아닐 때
        setResult("숫자 4개를 맞추면 우승입니다⚾");
      }
    }
  };

  const handleRetry = (e) => {
    e.preventDefault();
    const input = inputEl.current;
    setValue("");
    setAnswer(GetNumber());
    setTries([]);
    setResult("숫자 4개를 맞추면 우승입니다⚾");
    setReTry(false);
    if (input) {
      input.focus();
    }
  };

  const light = (strike, ball) => {
    let words = "green ".repeat(strike);
    words += "orange ".repeat(ball);
    words += "red ".repeat(4 - strike - ball);
    const res = words.split(" ");
    res.pop();
    return res;
  };

  const id = "cl84ceald0018t8n018yjpoi9";

  const getUser = async () => {
    const userId = id; // id값은 전역으로 저장해서 들고 다니기
    const res = await axios
      .get(`/api/game/${userId}`)
      .catch((err) => console.log(err));
    return res.data.response.totalPoint;
  };

  const updateUser = async (el) => {
    const point = el;
    const userId = id; // id값은 전역으로 저장해서 들고 다니기
    const res = await axios.patch(`/api/game`, { userId, point });
  };

  useEffect(() => {
    if (reTry) {
      if (result === "홈런") {
        getUser().then((el) => {
          updateUser(el + 400);
        });

        setGame({
          ...game,
          point: 400,
        });
      }
      router.push("/games/result");
    }
  }, [reTry]);

  return (
    <>
      <B.Form onSubmit={onSubmit}>
        <B.AnswerInput
          ref={inputEl}
          maxLength={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {reTry ? (
          <B.Button onClick={handleRetry}>다시하기</B.Button>
        ) : (
          <B.Button>입력</B.Button>
        )}
      </B.Form>
      <B.AnswerZone>
        {tries.length === 0 ? (
          <B.BottomSpan>게임을 시작해주세요.</B.BottomSpan>
        ) : (
          tries.map((v, i) => (
            <B.HistoryDiv>
              <B.Text>{i + 1}</B.Text>
              <B.BallSet>
                {light(v.strike, v.ball).map((el) => {
                  return <Balls background={el} />;
                })}
              </B.BallSet>
              <B.Text>{v.try}</B.Text>
            </B.HistoryDiv>
          ))
        )}
      </B.AnswerZone>
    </>
  );
};
