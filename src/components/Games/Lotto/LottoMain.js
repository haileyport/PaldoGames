import { useEffect, useState } from "react";
import { LottoMainBox, ResetBox, BixContainer } from "./Lotto.style";
import axios from "axios";
import Coupon from "./Coupon/Coupon";
import LottoHeader from "./LottoHeader/LottoHeader";
import ButtonStart from "./Button/ButtonStart";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState } from "./../../../states/user";
import gameInfo from "./../../../states/gameInfo";
import { useRouter } from "next/router";

const LottoMain = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45,
  ];

  const [playerNum, setPlayerNum] = useState([]);
  const [drawedNumbers, setDrawedNumbers] = useState([]);
  const [hits, setHits] = useState(0);
  const [point, setPoint] = useState(0);
  const [game, setGame] = useRecoilState(gameInfo);
  const { user } = useRecoilValue(currentUserState);

  const router = useRouter();

  const getUser = async () => {
    const userId = user.id;
    const res = await axios.get(`/api/game/${userId}`).catch((err) => console.log(err));
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
      setGame({
        game: {
          name: "lotto",
          answer: null,
        },
        point: 0,
      });
    });
  }, []);

  const selectedNumbers = (number, event) => {
    if (playerNum.length < 6 && !playerNum.includes(number)) {
      const numbers = [...playerNum];
      numbers.push(number);
      setPlayerNum(numbers);
      event.target.classList.toggle("selected");
    }
    if (playerNum.includes(number)) {
      let numbers = [...playerNum];
      numbers = numbers.filter((num) => num !== number);
      setPlayerNum(numbers);
      event.target.classList.toggle("selected");
    }
  };
  //hit한 개수를 구하는 함수
  const checkWin = (playerNumbers, drawedNumbers) => {
    const winNumbers = [];

    playerNumbers.forEach(function (number) {
      for (let i = 0; i < 6; i++) {
        if (number === drawedNumbers[i]) {
          //같으면 hit를 위한 배열인 winNumbers에 push
          winNumbers.push(number);
        }
      }
    });

    //게임 이름이 안나옴 수정필요//
    const hits = winNumbers.length;
    setHits(hits);
    //히트에 비례한 포인트 획득 비율//
    if (hits === 0 || hits === 1 || hits === 2) {
      getUser().then((el) => {
        updateUser(el - 1000); //그냥 감소만 //-1000
      });
      setGame({
        ...game,
        point: 0,
      });
    }
    router.push("/games/result");
    //
    if (hits === 3) {
      getUser().then((el) => {
        updateUser(el + 500); //원래 1500이지만 게임비 1000원 제외
      });
      setGame({
        ...game,
        point: 1500,
      });
    }
    router.push("/games/result");
    //
    if (hits === 4) {
      getUser().then((el) => {
        updateUser(el + 306000); //307000에서 -1000 => 306000
      });
      setGame({
        ...game,
        point: 307000,
      });
    }
    router.push("/games/result");
    //
    if (hits === 5) {
      getUser().then((el) => {
        updateUser(el + 11390000); //11391000 => 11390000
      });
      setGame({
        ...game,
        point: 11391000,
      });
    }
    router.push("/games/result");
    //
    if (hits === 6) {
      getUser().then((el) => {
        updateUser(el + 3213956000); //3213957000 => 3213956000
      });
      setGame({
        ...game,
        point: 3213957000,
      });
    }
    router.push("/games/result");
  };

  const startDraw = () => {
    if (playerNum.length === 6 && point >= 1000) {
      const optionNumbers = [...numbers];
      const drawedNumbers = [];
      setPoint((prev) => prev - 1000);

      for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * optionNumbers.length);
        drawedNumbers.push(optionNumbers[index]);
        optionNumbers.splice(index, 1);
      }
      setDrawedNumbers(drawedNumbers);
      checkWin(playerNum, drawedNumbers);
    }
  };

  return (
    <BixContainer>
      <LottoHeader />
      <LottoMainBox>
        {/* <Display drawedNumbers={drawedNumbers} /> */}
        {/* <Result hits={hits} point={point} /> */}
        <Coupon numbers={numbers} select={selectedNumbers}></Coupon>
      </LottoMainBox>
      <ResetBox>
        <ButtonStart playerNumbers={playerNum} start={startDraw} />
      </ResetBox>
    </BixContainer>
  );
};
//중복된 숫자일 경우 애니메이션이 안 됨. => 로또 디스플레이 삭제 => 결과창 도입으로 해결
export { LottoMain };
