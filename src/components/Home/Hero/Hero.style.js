import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 1024px) {
    width: 80%;
    flex-grow: 1;
    padding-right: 6rem;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-right: 4rem;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 0px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: rgb(255 255 255);
`;

export const HeroMiniTitle = styled.p`
  margin-bottom: 2rem;
  line-height: 1.625;
  font-weight: 600;
  font-size: 2rem;
  @media screen and (min-width: 640px) {
    font-size: 3rem;
    line-height: 5rem;
  }
`;

export const GameButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeroButton = styled.a`
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

export const AnimationContainer = styled.div`
  width: 83%;
  @media screen and (min-width: 1024px) {
    max-width: 45rem;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    max-width: 40rem;
    width: 50%;
  }
`;
