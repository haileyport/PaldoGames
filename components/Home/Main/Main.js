import { Hero } from '../..';
import { StyledMain, MainSection } from './Main.style';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../states';

export const Main = () => {
  return (
    <StyledMain>
      <MainSection>
        <Hero />
      </MainSection>
    </StyledMain>
  );
};
