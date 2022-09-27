import React from "react";
import { StartButtonOff, StartButtonOn } from "./ButtonStart.style";

const ButtonStart = ({ start, playerNumbers }) =>
  playerNumbers.length === 6 ? (
    <StartButtonOn onClick={start}>START</StartButtonOn>
  ) : (
    <StartButtonOff disabled>START</StartButtonOff>
  );

export default ButtonStart;
