import styled from "styled-components";

const StyledGamesCard = styled.div`
  border-radius: 8px;
  width: 100%;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const GamesCardTitle = styled.h3`
  margin-left: 20px;
`;

const GamesCardImgWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  &:hover {
    position: relative;
    filter: brightness(50%);
    transition: 0.3s;
  }
`;

const GameBtn = styled.button`
  width: 8em;
  height: 8em;
  outline: none;
  background: none;
  border: 0;
  margin: 0.5em;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${(props) => (props.top ? props.top : null)};
  left: ${(props) => (props.left ? props.left : null)};
  @media screen and (max-width: 40em) {
    width: 6em;
    height: 6em;
  }
`;

const GameBtnRound = styled.div`
  width: 100%;
  height: 92.39%;
  border-radius: 50%;
  border: 10px solid #cfdcec;
  overflow: hidden;
  background: ${(props) => (props.color ? props.color : "white")};
  box-shadow: 0 0 3px gray;
  &:hover {
    background: ${(props) => (props.hover ? props.hover : "#30588e")};
  }
`;

const GameBtnText = styled.span`
  float: left;
  width: 100%;
  padding: 50% 0;
  line-height: 1em;
  margin-top: -0.5em;
  text-align: center;
  color: #e2eaf3;
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 40em) {
    font-size: 0.8em;
  }
`;

export {
  StyledGamesCard,
  GamesCardTitle,
  GamesCardImgWrapper,
  GameBtn,
  GameBtnRound,
  GameBtnText,
};
