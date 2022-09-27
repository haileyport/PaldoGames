import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";
import axios from "axios";
import * as G from "./GameBoard.style";

import { useRecoilState, useRecoilValue } from "recoil";
import gameInfo from "./../../../states/gameInfo";
import { currentUserState } from "./../../../states/user";

import { BOARD_SIZE, WIN_NUMBER, MAX_NUMBER } from "../../../utils/merge/constants";
import GameModal from "./GameModal";
import GridContainer from "./GridContainer";
import TileContainer from "./TileContainer";
import { getDirection, getPosition } from "../../../utils/merge/touchEvent";
import { getRow, getColumn, getNewTile, isChanged, checkAllValueIsTrue, combineTile, checkIsCombinable } from "../../../utils/merge/tile";

const defaultArray = new Array(BOARD_SIZE * BOARD_SIZE).fill(0);

const getMaxNumber = (numbers) => {
  return Math.max.apply(
    Math,
    numbers.map((tile) => tile.number || 0)
  );
};

const GameBoard = ({ reset, setReset }) => {
  const [gameModal, setGameModal] = useState(null);
  const [numbers, setNumbers] = useState(defaultArray);
  const [prevPosition, setPrevPosition] = useState({});
  const [size, setSize] = useState([0, 0]);
  const [first, setFirst] = useState(true);
  const [game, setGame] = useRecoilState(gameInfo);
  const { user } = useRecoilValue(currentUserState);

  const setInitTile = () => {
    setBeRemovedTiles([]);
    setGameState(1);
    const newTile = getNewTile(defaultArray, true);
    const newTile2 = getNewTile(defaultArray, newTile.index);

    if (newTile && newTile2) {
      const newNumbers = [...defaultArray];
      newNumbers[newTile.index] = newTile;
      newNumbers[newTile2.index] = newTile2;
      setNumbers(newNumbers);
    }

    setFirst(true);
  };

  const getUser = async () => {
    const userId = user.id;
    const res = await axios.get(`/api/game/${userId}`).catch((err) => console.log(err));
    return res.data.response.totalPoint;
  };

  const updateUser = async (el) => {
    const point = el;
    const userId = user.id;
    const res = await axios.patch(`/api/game`, { userId, point });
  };

  const setGameState = (gameState) => {
    if (gameState !== 1) {
      let message = "You Win!";
      let button = <button onClick={() => setGameModal(null)}>Continue</button>;
      switch (gameState) {
        case 0:
          message = "Game Over!";
          break;
        case 2048:
          message = "You Win!";
          break;
        default:
          break;
      }
      setGameModal({ message });
    } else setGameModal(null);
  };

  const getGameState = () => {
    const isBoardFull = checkAllValueIsTrue(numbers);
    const maxNumber = getMaxNumber(numbers);
    const isCombinable = checkIsCombinable(numbers);
    return { maxNumber, isBoardFull, isCombinable };
  };

  const [beRemovedTiles, setBeRemovedTiles] = useState([]);

  const getLine = ({ row, col }, isUpDown) => {
    return numbers.filter((tile, idx) => tile.number && (isUpDown ? getColumn(idx) === col : getRow(idx) === row));
  };

  const slide = (direction) => {
    let newArray = Array(BOARD_SIZE * BOARD_SIZE).fill(0);
    const isUpDown = Math.abs(direction) > 1;
    let combinedArray = [];
    let totalAddedScore = 0;
    for (var index = 0; index < BOARD_SIZE; index++) {
      const basePosition = isUpDown ? { row: 0, col: index } : { row: getRow(index * BOARD_SIZE), col: 0 };
      let line = getLine(basePosition, isUpDown);
      const missing = BOARD_SIZE - line.length;
      const zeros = Array(missing).fill(0);
      line = direction > 0 ? line.concat(zeros) : zeros.concat(line);
      if (zeros.length < BOARD_SIZE) {
        const rootIndex = isUpDown ? basePosition.col : basePosition.row;
        const { movedArray, combinedRowArray, interimScore } = combineTile({
          line,
          isUpDown,
          resultArray: newArray,
          direction,
          rootIndex,
        });
        totalAddedScore += interimScore;
        newArray = movedArray;
        combinedArray = combinedArray.concat(combinedRowArray);
      }
    }
    return { newArray, combinedArray, totalAddedScore };
  };

  const handleTouchStart = (e) => {
    const newPosition = getPosition(e);
    setPrevPosition({ ...newPosition });
  };

  const handleTouchEnd = (e) => {
    const direction = getDirection(e, prevPosition);
    if (direction) {
      slideTiles(direction);
    }
  };

  const slideTiles = useCallback(
    (direction) => {
      let { newArray, combinedArray, totalAddedScore } = slide(direction, [...numbers]);
      if (isChanged(newArray)) {
        const newTile = getNewTile(newArray);
        if (first) {
          getUser()
            .then((el) => {
              updateUser(el - 100);
            })
            .then(() => setFirst(false));
        }
        if (newTile) {
          newArray[newTile.index] = newTile;
          setNumbers([...newArray]);
          setBeRemovedTiles([...combinedArray]);
        }
      }
    },
    [slide]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      let direction = null;
      switch (e.keyCode) {
        case 37:
          direction = 1;
          break;
        case 38:
          direction = BOARD_SIZE;
          break;
        case 39:
          direction = -1;
          break;
        case 40:
          direction = -BOARD_SIZE;
          break;
        default:
          break;
      }
      if (direction) slideTiles(direction);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slideTiles]);

  useEffect(() => {
    const { maxNumber, isBoardFull, isCombinable } = getGameState();
    if (!isCombinable && isBoardFull) {
      setGameState(0);
    } else if (!isBoardFull && (maxNumber === WIN_NUMBER || maxNumber === MAX_NUMBER)) {
      setGameState(maxNumber);
    }
  }, [numbers]);

  useEffect(() => {
    setInitTile();
  }, [reset]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size[0] >= 650 ? (
    <G.Container onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      {gameModal && <GameModal gameModal={gameModal} />}
      <GridContainer />
      <TileContainer numbers={numbers} beRemovedTiles={beRemovedTiles} />
    </G.Container>
  ) : (
    <G.Alert>
      <div>⚠️ 2048 게임은 가로 길이 650px 이상의 디스플레이에서만 가능합니다.</div>
      <div>현재 화면에서 방향키 입력 시 게임이 실행되고 포인트가 차감됩니다.</div>
    </G.Alert>
  );
};

export default GameBoard;
