import styled from "styled-components";

const ScoreBoard = ({ score }) => {
  return (
    <Board>
      <div>
        <label>SCORE</label>
        <span>{score}</span>
      </div>
    </Board>
  );
};

const Board = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem;
  & div {
    border-radius: 4px;
    background-color: rgb(99 102 241);
    padding: 1rem;
    font-weight: bold;
    text-align: center;
    min-width: 100px;
    max-width: 100px;
    max-height: 100px;
    & label {
      display: block;
      margin-bottom: 4px;
      color: rgb(255 255 255);
      font-size: 1.2rem;
    }

    & span {
      color: white;
      font-size: 1.5rem;
    }

    &:last-child {
      margin-left: 4px;
    }

    @media (max-width: 650px) {
      display: none;
    }
  }
`;

export default ScoreBoard;
