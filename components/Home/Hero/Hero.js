import Link from 'next/link';
import { Animation } from '../Main/Animation';
import { StyledHeroContainer, HeroTitle, HeroMiniTitle, GameButton, HeroButton, AnimationContainer } from './Hero.style';

export const Hero = () => {
  return (
    <>
      <StyledHeroContainer>
        <HeroTitle>
          안녕하세요, <br />
          팔도게임즈 입니다!
        </HeroTitle>
        <HeroMiniTitle>포인트를 얻어 랭킹에 들어봅시다!</HeroMiniTitle>
        <GameButton>
          <Link href='#'>
            <HeroButton>게임하러 가기</HeroButton>
          </Link>
        </GameButton>
      </StyledHeroContainer>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
    </>
  );
};
