import styled from "styled-components";

const ResultBox = styled.section`
  width: 20rem;
  height: 4rem;
  background-color: rgb(30, 41, 59);
`;

const ResultNum = styled.div`
  padding-bottom: 10px;
`;
const ResultPoint = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
`;
const ResultMiniBox = styled.span`
  color: rgb(255, 255, 255);
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export { ResultBox, ResultNum, ResultPoint, ResultMiniBox };
