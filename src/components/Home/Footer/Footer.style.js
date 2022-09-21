import styled from "styled-components";

const Footer = styled.footer`
  margin-top: -85px;
  background: none;
  height: 100%;

  @media screen and (min-width: 640px) {
    margin-top: -100px;
  }

  @media screen and (max-width: 768px) {
    margin-top: -100px;
    height: 100%;
  }
`;

const Container = styled.div`
  padding: 1.5rem 1.25rem 1.5rem 1.25rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100px;
  @media screen and (min-width: 640px) {
    max-width: 640px;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
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
  justify-content: center;
  color: rgb(17 24 93);
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const TeamName = styled.span`
  color: rgb(148 163 184);
  margin-left: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  &:hover {
    color: rgb(17 24 39);
    cursor: pointer;
  }
`;

const CopyRight = styled.p`
  color: rgb(148 163 184);
  margin-top: 1rem;
  @media screen and (min-width: 640px) {
    margin-left: 1.5rem;
  }
`;

const A = styled.a`
  margin-left: 0.25rem;
`;

export { Footer, Container, InfoContainer, TeamName, CopyRight, A };
