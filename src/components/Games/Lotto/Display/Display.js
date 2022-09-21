import React from "react";
import Ball from "./Ball";
import { DisplayDiv } from "./Display.style";

const Display = ({ drawedNumbers }) => {
  const balls = drawedNumbers.map((number) => (
    <Ball key={number} number={number} />
  ));

  return <DisplayDiv>{balls}</DisplayDiv>;
};

export default Display;
