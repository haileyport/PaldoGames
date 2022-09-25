import styled, { css } from "styled-components";
import { Cell } from "./Cell";
import { BOARD_SIZE } from "./../../../utils/merge/constants";
const defaultArray = new Array(BOARD_SIZE * BOARD_SIZE).fill(0);

const GridContainer = () => {
  return (
    <GridWrap boardSize={BOARD_SIZE}>
      {defaultArray.map((row, index) => (
        <GridCell
          key={`cell-${index}`}
          row={parseInt(index / BOARD_SIZE)}
          col={index % BOARD_SIZE}
          boardSize={BOARD_SIZE}
        ></GridCell>
      ))}
    </GridWrap>
  );
};

const GridWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${({ boardSize }) => {
    return css`
      width: ${`calc(8rem * ${boardSize} + .8rem * ${boardSize - 1})`};
      height: ${`calc(8rem * ${boardSize} + .8rem * ${boardSize - 1})`};
    `;
  }}
`;

const GridCell = styled((props) => <Cell {...props} />)`
  background-color: #605565;
`;

export default GridContainer;
