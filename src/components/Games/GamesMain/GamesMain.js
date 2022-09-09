import Link from 'next/link';
import { MainSection } from '../../Home/Main/Main.style';
import { StyledGamesMain } from './GamesMain.style';

export const GamesMain = () => {
  return (
    <StyledGamesMain>
      <MainSection>
        <Link href='games/wordrelay'></Link>
      </MainSection>
    </StyledGamesMain>
  );
};
