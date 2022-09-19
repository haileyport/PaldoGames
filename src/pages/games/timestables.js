import Head from 'next/head';
import { TimesTablesGame } from '../../components/Games/TimesTables/TimesTablesGame';
import { Layout } from '../../components'
import { Flex } from '../../components/@commons';
import { MainSection } from '../../components/Home/Main/Main.style';

const TimesTables = () => {
  return(
    <Layout>
      <Head>
          <title>구구단 게임</title>
      </Head>
      <TimesTablesGame />
      <MainSection />
    </Layout>
)
}
export default TimesTables;
