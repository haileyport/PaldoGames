import styled from "styled-components";

export const StyledGamesCard = styled.div`
  margin: 20px;
  border-radius: 9px;
  background-color: beige;
  &:hover {
    cursor: pointer;
  }
`;

export const GamesCardTitle = styled.h2`
  margin-left: 20px;
`;

export const GamesCardImgWrapper = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  position: relative;
  &:hover {
    filter: brightness(50%);
    transition: 0.3s;
    position: relative;
  }
`;

export const GameStartBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  padding: 2em;
`;

export const GameInfoBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  padding: 2em;
`;
