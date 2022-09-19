import { MainSection } from '../../../Home/Main/Main.style';
import { Tictactoe } from '../Tictactoe';
import * as T from './Tictactoe.style';

export const TictactoeMain = () => {
  return (
    <T.Main>
      <Tictactoe style={{ position: 'relative', bottom: 100 }} />
    </T.Main>
  );
};
