import Head from 'next/head';

import { useRecoilState } from 'recoil';
import { wordRelayGameInfo } from '../../states';

import { Layout, WordRelayMain } from '../../components';
import { Button, Flex, P } from '../../components/@commons';

const WordRelayGamePage = () => {
  const [gameInfo, setGameInfo] = useRecoilState(wordRelayGameInfo);

  const { lives } = gameInfo;
  const heartsArray = lives ? Array.from({ length: lives }).fill('♥') : [];

  const resetGameInfo = () => {
    setGameInfo({ lives: 3, count: 0, points: 0 });
  };

  return (
    <Layout>
      <Head>
        <title>끝말잇기 게임</title>
        <meta name='description' content='오늘도 즐겜' />
      </Head>

      {/* 추후에 UI 교체 필요 
        하나의 컨테이너에 모아서 centering 
      */}
      <Flex flexDirection='column' alignItems='center'>
        {lives ? (
          <P content={`${heartsArray.join('')}`} style={{ fontSize: 50 }} />
        ) : (
          <>
            <P className='current-word' content={'더이상 목숨이 남아있지 않습니다.'} style={{ color: 'red', fontSize: 20, alignItems: 'center' }}></P>
            <Button content='게임 재시작' onClickEvent={resetGameInfo}></Button>
          </>
        )}
        <WordRelayMain></WordRelayMain>
      </Flex>
    </Layout>
  );
};

export default WordRelayGamePage;
