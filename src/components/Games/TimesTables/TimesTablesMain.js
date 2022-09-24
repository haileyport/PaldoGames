import { useEffect, useState, useRef } from "react";
import {
  AlarmContainer,
  StyledTimesTables,
  TimesTablesAlarm,
  TimesTablesBtn,
  TimesTablesLives,
  TimesTablesSmallTitle,
  TimesTablestext,
  TimesTablesTitle,
} from "./TimesTablesMain.style";
import alarm from "../../../../public/alarm.png";
import Image from "next/image";
import { useRecoilValue, useRecoilState } from "recoil";
import { currentUserState } from "../../../states";
import axios from "axios";
import { useRouter } from "next/router";
import gameInfo from "../../../states/gameInfo";

const TimesTablesMain = () => {
  const [numbers, setNumbers] = useState({
    first: Math.ceil(Math.random() * 19),
    second: Math.ceil(Math.random() * 19),
    count: 0,
  });
  const [seconds, setSeconds] = useState(3);
  const [score, setScore] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [lives, setLives] = useState(["💖", "💖", "💖"]);
  const [states, setStates] = useState({ status: "", result: null, value: "" });
  const valueInput = useRef();
  const { status, result, value } = states;
  const { first, second, count } = numbers;
  const [game, setGame] = useRecoilState(gameInfo);

  const [point, setPoint] = useState(0);
  const { user } = useRecoilValue(currentUserState);

  const router = useRouter();

  const getUser = async () => {
    const userId = user.id;
    const res = await axios
      .get(`/api/game/${userId}`)
      .catch((err) => console.log(err));
    return res?.data?.response?.totalPoint;
  };

  const updateUser = async (el) => {
    const point = el;
    const userId = user.id;
    const res = await axios.patch(`/api/game`, { userId, point });
  };

  useEffect(() => {
    getUser().then((el) => {
      setPoint(el);
    });
    setGame({
      game: {
        name: "timestables",
        answer: null,
      },
      point: 0,
    });
  }, []);

  const nextQue = () => {
    setNumbers({
      first: Math.ceil(Math.random() * 19),
      second: Math.ceil(Math.random() * 19),
      count: count + 1,
    });
  };

  const right = () => {
    setStates({ status: "딩동댕", result: true, value: "" });
    nextQue();
    setScore(score + 1);
  };

  const wrong = () => {
    setStates({ status: "땡", result: false, value: "" });
    if (seconds < 0) {
      printLives();
    }
  };

  const printLives = () => {
    lives.pop();
    setLives(lives);
  };

  useEffect(() => {
    if (gameStart) {
      valueInput.current.focus();
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
        if (count === 10 || lives.length === 0) {
          clearInterval(timer);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  });

  useEffect(() => {
    if (seconds < 0 && result === false) {
      wrong();
      nextQue();
      setSeconds(3);
    } else if (seconds < 0 && count === 0) {
      wrong();
      nextQue();
      setSeconds(3);
    }
    if (result) {
      setSeconds(3);
      setStates({ ...states, result: false });
    }
  }, [seconds]);

  const gameOver = () => {
    if (score >= 7) {
      // 게임 성공 200 포인트
      getUser().then((el) => {
        updateUser(el + 200);
      });
      setGame({
        game: {
          name: "timestables",
          answer: null,
        },
        point: 200,
      });
    }
    router.push("/games/result");
    setNumbers({ ...numbers, count: 0 });
    setScore(0);
    setStates({ ...states, status: "", result: null });
    setSeconds(3);
    setLives(["💖", "💖", "💖"]);
  };

  if (count === 10 || lives.length === 0) {
    gameOver();
  }

  const handleGameStatus = () => {
    getUser().then((el) => {
      // 게임 참가비 100 포인트
      updateUser(el - 100);
    });
    setGameStart(!gameStart);
  };

  return (
    <StyledTimesTables>
      {!gameStart ? (
        <>
          <TimesTablesTitle>구구단 게임 💬</TimesTablesTitle>
          <TimesTablesBtn
            onClick={() => {
              handleGameStatus();
            }}
          >
            게임 시작하기
          </TimesTablesBtn>
        </>
      ) : (
        <>
          <TimesTablesSmallTitle>구구단 게임 💬</TimesTablesSmallTitle>
          <AlarmContainer>
            <Image src={alarm} width="80%" height="80%" />
            <TimesTablesAlarm>{seconds}</TimesTablesAlarm>
          </AlarmContainer>
          <TimesTablesLives>{lives}</TimesTablesLives>
          <TimesTablestext>
            {count + 1}. {first} 곱하기 {second}은(는)? {score}점
          </TimesTablestext>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              {
                Number(value) === first * second ? right() : wrong();
              }
            }}
          >
            <input
              type="number"
              value={value}
              ref={valueInput}
              onChange={(e) => {
                setStates({ ...states, value: e.target.value });
              }}
            />
            <button>입력</button>
          </form>
          <TimesTablesSmallTitle>{status}</TimesTablesSmallTitle>
        </>
      )}
    </StyledTimesTables>
  );
};

export { TimesTablesMain };
