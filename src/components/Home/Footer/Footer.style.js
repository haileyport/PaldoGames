import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  margin-top: 3%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  /* @media screen and (min-width: 350px) {
    margin-top: -100px;
  }

  @media screen and (min-width: 640px) {
<<<<<<< HEAD
    //640이상
=======
>>>>>>> 9eb9af3c65959518b3f54d553573eba4d506a8e6
    margin-top: -100px; 
  }*/
  @media screen and (max-width: 768px) {
    display: none;
    height: 100%;
    margin-top: -100px;
  }
  //밑으로 눌려질 때, 사라지게 만들었음
  @media screen and (max-height: 900px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 1.5rem 1.25rem 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  //이이이이
  @media screen and (min-width: 640px) {
    max-width: 640px;
  }
  @media screen and (min-width: 768px) {
    // max-width: 768px;
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const InfoContainer = styled.a`
  display: flex;
  font-weight: 500;
  align-items: center;
  color: rgb(17 24 93);
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const TeamName = styled.div`
  color: rgb(148 163 184);
  margin-left: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  position: relative;
  &:hover {
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

const A = styled.a`
  font-size: 1.25rem;
  margin-left: 0.25rem;
  color: rgb(255, 255, 255);
`;

export const HideButton = styled.button`
  bottom: 90%;
  opacity: 0.1;
  height: 10px; //찾기 쉽게 좀 키웠슴다..
  background-color: #1e293b;
  cursor: pointer;
`;

export { Footer, Container, InfoContainer, TeamName, A };
