import Head from 'next/head';
import TimesTablesGame from '../../components/Games/TimesTables/TimesTablesGame';
import { StyledTimesTables } from '../../components/Games/TimesTables/TimesTablesGame.style';
import { MainSection } from '../../components/Home/Main/Main.style';
import { Layout } from '../../components';

const TimesTables = () => {
  return(
    <>
    <Head>
        <title>구구단 게임</title>
    </Head>
    <Layout>
            <TimesTablesGame />
        <MainSection />
    </Layout>
    </>
)
}
export default TimesTables;