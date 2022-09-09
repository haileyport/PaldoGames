import { MainSection } from '../../../Home/Main/Main.style';
import { WordRelay } from '../word-relay';
import { StyledWordRelayMain } from './WordRelayMain.style';

const WordRelayMain = () => {
  return (
    <StyledWordRelayMain>
      <MainSection>
        <WordRelay />
      </MainSection>
    </StyledWordRelayMain>
  );
};

export { WordRelayMain };
