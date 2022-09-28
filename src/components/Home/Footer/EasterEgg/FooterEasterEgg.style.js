import styled from "styled-components";

export const BigBox = styled.div`
  background-color: #1e293b;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  height: 700px;
  background-color: #2f405d;
  padding: 10px;
`;

export const SmallBox = styled.div`
  width: 100%;
  height: 160px;
  @media screen and (max-width: 660px) {
    font-size: 9px;
  }
`;

export const User = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  padding-bottom: 4px;
  cursor: pointer;
  text-decoration: underline 1px white;
  &:hover {
    color: rgb(99 102 241);
  }
`;

export const Contents = styled.div`
  width: 100%;
  line-height: 2em;
  white-space: pre-wrap;
  text-align: center;
  color: #e2eaf3;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 40em) {
    font-size: 0.7em;
  }
`;
