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
  font-size: 5rem;
  padding-left: 50px;
`;

const RankingSubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  font-size: 1rem;
  color: rgb(100 116 139);
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  position: relative;
`;

const RankingBox = styled.table`
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 20px 10px;

  > thead th {
    width: 150px;
    padding: 10px;
    font-weight: bold;
    vertical-align: top;
    color: rgt(255, 255, 255);
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
  }
  @media screen and (max-width: 520px) {
    display: none;
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

/* > :nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-right: 1px solid white;
  }
  > :nth-child(2) {
    display: flex;
    width: 15rem;
    padding-left: 3px;
  }
  > :nth-child(3) {
    display: flex;
    align-items: center;
    width: 20px;
    height: 2rem;
    padding-left: 1px;
    border-left: 1px solid white;
  } */

export { BackColor, RankingBox, BoxSectionOne, MiddleBox, RankingTitle, RankingSubTitle, ImageBox };
