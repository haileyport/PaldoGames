import Link from 'next/link';
import styled from 'styled-components';
import { Animation } from './Animation';

export const Hero = () => {
  return (
    <>
      <Container>
        <Title>
          안녕하세요, <br />
          팔도게임즈입니다!
        </Title>
        <Mini_title>포인트를 얻어 랭킹에 들어봅시다!</Mini_title>
        <Go_to_Game>
          <Link href='/game'>
            <Btn>게임하러 가기</Btn>
          </Link>
        </Go_to_Game>
      </Container>
      <Animation_box>
        <Animation />
      </Animation_box>
    </>
  );
};

const Container = styled.div`
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

const Title = styled.h1`
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

const Mini_title = styled.p`
  margin-bottom: 2rem;
  line-height: 1.625;
  font-weight: 600;
`;

const Go_to_Game = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.a`
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

const Animation_box = styled.div`
  width: 83%;
  @media screen and (min-width: 1024px) {
    max-width: 32rem;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
