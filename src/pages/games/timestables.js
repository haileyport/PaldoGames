import Head from 'next/head';
import TimesTablesGame from '../../components/Games/TimesTables/TimesTablesGame';
import { StyledTimesTables } from '../../components/Games/TimesTables/TimesTablesGame.style';

const TimesTables = () => {
  return(
    <>
    <Head>
        <title>구구단 게임</title>
    </Head>
    <StyledTimesTables>
    <TimesTablesGame />
    </StyledTimesTables>
    </>
)
}
export default TimesTables;
