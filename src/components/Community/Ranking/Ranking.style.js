import styled from "styled-components";

const BackColor = styled.div`
  background-color: #1e293b;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;
const RankingTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;

  @media screen and (min-width: 640px) {
    font-size: 4rem;
    line-height: 5rem;
  }
  @media screen and (max-width: 640px) {
    font-size: 4rem;
    line-height: 5rem;
  }
`;

const RankingSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  font-size: 1.5rem;
  color: rgb(148 163 184);
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

const RankingBox = styled.table`
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid rgb(255, 255, 255);
  margin: 20px 10px;

  > thead tr th {
    width: 150px;
    padding: 10px;
    font-weight: bold;
    font-size: 1.3rem;
    vertical-align: top;
    color: rgb(255, 255, 255);
    background: rgb(99 102 241);
    margin: 20px 10px;
  }
  > tbody tr {
    width: 150px;
    padding: 10px;
  }
  > tbody td {
    width: 300px;
    padding: 10px;
    vertical-align: top;
    font-size: 1.3rem;
  }
`;

const BoxSectionOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100px;
  margin: 20px;
  height: 2em;
  background-color: blue;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3%;
  height: 100%;
  padding-top: 10px;
`;

export { BackColor, RankingBox, BoxSectionOne, MiddleBox, RankingTitle, RankingSubTitle, ImageBox };
