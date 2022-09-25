import styled, { css, keyframes } from "styled-components";
import { BOARD_SIZE } from "./../../../utils/merge/constants";
import { Cell } from "./Cell";
const TileContainer = ({ numbers, beRemovedTiles }) => {
  return (
    <TileWrap>
      {beRemovedTiles.map((tile, index) => (
        <Tile
          key={`combined-${index}`}
          tile={tile}
          beRemoved={true}
          boardSize={BOARD_SIZE}
        >
          {tile.number}
        </Tile>
      ))}
      {numbers.map((tile, index) =>
        tile ? (
          <Tile key={`tile-${tile.id}`} tile={tile} boardSize={BOARD_SIZE}>
            {tile.number}
          </Tile>
        ) : (
          ""
        )
      )}
    </TileWrap>
  );
};

const TileWrap = styled.div`
  position: absolute;
  z-index: 1;
`;

//TODO: 색감 조절하기
const colors = {
  2: { background: "#D9CCD9", color: "white" },
  4: { background: "#D8BFD8", color: "white" },
  8: { background: "#DDADDD", color: "white" },
  16: { background: "#EDB2ED", color: "white" },
  32: { background: "#BB91E3", color: "white" },
  64: { background: "#A286DB", color: "white" },
  128: { background: "#9370DB", color: "white" },
  256: { background: "#AB6FE3", color: "white" },
  512: { background: "#9080ED", color: "white" },
  1024: { background: "#7B68EE", color: "white" },
  2048: { background: "#6A5ACD", color: "white" },
};

const Tile = styled(Cell).attrs(({ tile }) => {
  if (tile) {
    const { number } = tile;
    return {
      style: {
        background: colors[number].background,
        color: colors[number].color,
        boxShadow: colors[number].boxShadow || "none",
      },
    };
  }
})`
  ${({ tile, beRemoved }) => {
    if (tile) {
      const { row, col, prevCol, prevRow, isNew, isCombined } = tile;
      const position = {
        x: `calc(${col} * 8rem + .8rem * ${col})`,
        y: `calc(${row} * 8rem + .8rem * ${row})`,
        prevRow: `calc(${prevCol} * 8rem + .8rem * ${prevCol})`,
        prevCol: `calc(${prevRow} * 8rem + .8rem * ${prevRow})`,
      };
      return css`
        transform: ${`translate(${position.prevRow},${position.prevCol})`};
        opacity: ${isNew ? 0 : 1};
        animation-duration: ${isCombined || isNew ? ".2s" : ".1s"};
        animation-delay: ${isNew ? ".2s" : "none"};
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        z-index: ${isNew || isCombined ? 0 : 0};
        animation-name: ${isNew
          ? scaleUp(position)
          : isCombined
          ? pop(position)
          : beRemoved
          ? slideOutTile(position)
          : slideTile(position)};
      `;
    }
  }}
  position: absolute;
  text-align: center;
  font-size: ${(props) =>
    props.tile.number < 100
      ? "4.4rem"
      : props.tile.number < 1000
      ? "4rem"
      : "3.2rem"};
  font-weight: bold;
`;

const pop = ({ x, y }) => keyframes`
 from{
    transform: ${`translate(${x},${y})`} scale(0);
  }
  80%{
    transform: ${`translate(${x},${y})`} scale(1.2);
  }
  to{
    transform: ${`translate(${x},${y})`} scale(1);
  }
`;

const slideTile = ({ prevRow, x, prevCol, y }) => keyframes`
  from {
    transform: ${`translate(${prevRow},${prevCol})`};
  }
  to{
    transform : ${`translate(${x},${y})`};
  }
`;

const slideOutTile = ({ prevRow, x, prevCol, y }) => keyframes`
  from {
    transform: ${`translate(${prevRow},${prevCol})`};
  }
  to{
    transform : ${`translate(${x},${y})`};
    display: none;
  }
`;

const scaleUp = ({ x, y }) => keyframes`
  from {
    transform: ${`translate(${x},${y})`} scale(0);
  }
  to{
    transform: ${`translate(${x},${y})`} scale(1);
    opacity: 1;
  }
`;

export default TileContainer;
