import styled from "styled-components";

const StyledGamesCard = styled.div`
  border-radius: 8px;
  width: 256px;
  height: 256px;
  position: relative;
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
  display: inline-flex;
  color: rgb(255 255 255);
  background-color: rgb(99 102 241);
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  top: ${(props) => (props.top ? props.top : null)};
  left: ${(props) => (props.left ? props.left : null)};
  width: 6em;
  height: 2em;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }
`;

const GameBtnText = styled.span`
  width: 100%;
  line-height: 1em;
  text-align: center;
  color: #e2eaf3;
  font-size: 0.7em;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 40em) {
    font-size: 0.6em;
  }
`;

export { StyledGamesCard, GamesCardImgWrapper, GameBtn, GameBtnText };
