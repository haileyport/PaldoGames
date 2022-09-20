import styled from "styled-components";

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  height: 100%;
`;

export const HeadTitle = styled.h1`
  color: white;
  font-size: 4rem;
`;

export const Description = styled.div`
  color: white;
  margin-bottom: 2rem;
  line-height: 1.625;
`;

export const AnswerInput = styled.input`
  width: 70px;
  font-size: 1.5rem;
  padding: 6px 8px;
  background-color: none;
  outline: none;
  border-width: 1px;
  border-radius: 1rem;
  border-style: solid;
  margin-right: 10px;
`;

export const Button = styled.button`
  display: inline-flex;
  color: rgb(255 255 255);
  background-color: rgb(99 102 241);
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  margin-bottom: 25px;
`;

export const AnswerZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HistoryDiv = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Text = styled.span`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  width: calc(100% / 3);
`;

export const BallSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% / 3);
`;

export const StyledBaseBallMain = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 100px;
  justify-content: space-around;
`;

export const BottomSpan = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  justify-content: center;
  display: flex;
  width: calc(100% / 3);
`;
