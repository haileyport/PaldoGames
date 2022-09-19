import styled from "styled-components";

const StyledHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 1024px) {
    //lg
    flex-grow: 1;
    padding-right: 6rem;
  }
  @media screen and (min-width: 768px) {
    //md
    width: 50%;
    padding-right: 4rem;
    align-items: flex-start;
    text-align: left;
    margin-bottom: 0px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: rgb(255 255 255);
  @media screen and (min-width: 640px) {
    //sm
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

const HeroMiniTitle = styled.p`
  margin-bottom: 2rem;
  line-height: 1.625;
  font-weight: 600;
`;

const GameButton = styled.div`
  display: flex;
  justify-content: center;
`;

const HeroButton = styled.a`
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

const AnimationContainer = styled.div`
  width: 83%;
  @media screen and (min-width: 1024px) {
    max-width: 32rem;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export { StyledHeroContainer, HeroTitle, HeroMiniTitle, GameButton, HeroButton, AnimationContainer };
