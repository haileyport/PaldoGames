import styled from "styled-components";

const BixContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgb(30, 41, 59);
`;

const TotalPoint = styled.span`
  font-size: larger;
  color: blue;
  padding-top: 1rem;
  margin: auto;
`;

const LottoTicket = styled.div`
  width: 80rem;
  height: 25px;
  background-color: red;
`;

const LottoMainBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const ResetBox = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 2rem;
`;

export { TotalPoint, LottoTicket, LottoMainBox, ResetBox, BixContainer };
