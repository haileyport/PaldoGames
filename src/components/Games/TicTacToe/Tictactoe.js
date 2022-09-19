/* eslint-disable no-unused-expressions */
import { useEffect, useRef, useState, version } from "react";
import { TicTacToeGameResult } from "./GameResult";
import { Cell } from "./Cell";
import { Flex } from "../../@commons";
import { createEmptyArray, generateRandomNumber } from "../../../utils/utils";

export const Tictactoe = () => {
  // 랜덤한 숫자로 1 ~ 9 중 한개의 cell에 바둑돌이 들어가 있게 하면 난이도가 올라감.
  // 실패 구현
  const [turn, setTurn] = useState("⚪️");
  const [cells, setCells] = useState(createEmptyArray(9).fill(""));
  const [winner, setWinner] = useState();
  const [gameCount, setGameCount] = useState(0);
  const cellsRef = useRef(null);

  const decideWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (squares[pattern[0]] === "" || squares[pattern[1]] === "" || squares[pattern[2]] === "") {
          // do nothing
        } else if (squares[pattern[0]] === squares[pattern[1]] && squares[pattern[1]] === squares[pattern[2]]) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      return;
    }

    let squares = [...cells];
    // Empty array * 9

    turn === "⚪️" ? ((squares[num] = "⚪️"), setTurn("⚫️")) : ((squares[num] = "⚫️"), setTurn("⚪️"));

    decideWinner(squares);
    setCells(squares);
    setGameCount(gameCount + 1);
  };

  const handleRestart = () => {
    // void
    setWinner(null);
    setCells(createEmptyArray(9).fill(""));
    setGameCount(0);
  };

  const clickRandomCell = () => {
    const tableIndex = generateRandomNumber(0, 3);
    const cellIndex = generateRandomNumber(0, 3);
    const cells = cellsRef.current.children[tableIndex];
    const target = cells.children[cellIndex];

    target.click();
  };

  // useEffect(() => clickRandomCell, []);

  return (
    <>
      <Flex flexDirection='column' alignItems='center' justifyContent='center'>
        <table style={{ width: 600, height: 600 }}>
          <thead>
            <tr>
              <th style={{ color: "white", fontSize: 30, fontWeight: 300 }}>Turn : {turn}</th>
            </tr>
          </thead>
          <tbody ref={cellsRef}>
            <tr>
              <Cell num={0} winner={winner} cells={cells} handleClick={handleClick} />
              <Cell num={1} winner={winner} cells={cells} handleClick={handleClick} />
              <Cell num={2} winner={winner} cells={cells} handleClick={handleClick} />
            </tr>
            <tr>
              <Cell num={3} winner={winner} cells={cells} handleClick={handleClick} />
              <Cell num={4} winner={winner} cells={cells} handleClick={handleClick} />
              <Cell num={5} winner={winner} cells={cells} handleClick={handleClick} />
            </tr>
            <tr>
              <Cell num={6} winner={winner} cells={cells} handleClick={handleClick} />
              <Cell num={7} winner={winner} cells={cells} handleClick={handleClick} />
              <Cell num={8} winner={winner} cells={cells} handleClick={handleClick} />
            </tr>
          </tbody>
        </table>
        {winner ? (
          <TicTacToeGameResult printWinner={() => handleRestart()} content={`${winner} 돌이 승리했습니다.`} />
        ) : gameCount === 9 ? (
          <TicTacToeGameResult printWinner={() => handleRestart()} content={`승리자가 없습니다.`} />
        ) : null}
      </Flex>
    </>
  );
};
