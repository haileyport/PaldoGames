import styled from "styled-components";

export const Cell = styled.div(({ row, col, boardSize }) => ({
  width: "8rem",
  height: "8rem",
  lineHeight: `8.4rem`,
  marginBottom: row < boardSize - 1 ? "0.8rem" : 0,
  marginRight: col < boardSize - 1 ? "0.8rem" : 0,
  borderRadius: "3px",
}));
