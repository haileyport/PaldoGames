import { useCallback, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { CLASSNAME, COLOR, DEFAULT, ERROR_MESSAGE } from '../../../constants';
import { Form, Button, P, Input } from '../../@commons';
import { fetch우리말api } from '../../api/wordRelayApi/wordRelayApi';
import { isValidInputWord, clearInputValue, handleErrorMessage } from '../../../utils';
import { wordRelayGameInfo } from '../../../states';

// 점수관련 필요한 기능
// 게임의 길이 = wordsArray 의 길이
// 게임의 길이 === 10 이면 게임 리셋 제시어는 리셋 ??

// 웹에서 긁어오는 방법 알아보기
// 리셋시에 제시어도 랜덤으로 제시할 필요하 있음??
// 성공시에 count ++, count === 10 ? reset

export const CurrentGame = () => {
  const [wordsArray, setWordsArray] = useState([DEFAULT.GIVEN_WORDS]);
  const [state, setState] = useState({ prevWord: undefined, currentWord: wordsArray[0], definition: undefined, loading: false });
  const [gameInfo, setGameInfo] = useRecoilState(wordRelayGameInfo);

  const wordInput = useRef(null);
  const errorMessage = useRef(null);
  const wordRelayForm = useRef(null);

  const handleGameStates = async (word, currentWord, lives, count, points) => {
    (await fetch우리말api(word))
      ? setTimeout(async () => {
          setState({
            ...state,
            prevWord: currentWord,
            currentWord: word,
            definition: await fetch우리말api(word),
            loading: false,
          });

          setWordsArray((prev) => [...prev, word]);

          if (count === 2) {
            setWordsArray([]);
          }

          if (count === 3) {
            setGameInfo({
              lives: 3,
              count: 0,
              points: points + 200,
            });
          } else {
            setGameInfo({
              ...gameInfo,
              count: count + 1,
            });
          }
        })
      : setTimeout(() => {
          if (lives !== 0) {
            setGameInfo({
              ...gameInfo,
              lives: lives - 1,
            });
          }

          setState({
            ...state,
            prevWord: currentWord,
            definition: undefined,
            loading: false,
          });
        });
  };

  const updateErrorMessage = (message) => {
    errorMessage.current.textContent = message;
  };

  const handleSubmitButton = async (word) => {
    let { currentWord } = state;
    const { lives, count, points } = gameInfo;

    setState({
      loading: true,
    });

    handleGameStates(word, currentWord, lives, count, points);
  };

  useCallback(handleSubmitButton, []);

  const onClickSubmitButton = (currentWord, wordsArray) => {
    const errorMessageHandler = handleErrorMessage(wordInput.current.value, currentWord, wordsArray);

    updateErrorMessage(errorMessageHandler);

    if (isValidInputWord(errorMessageHandler)) {
      handleSubmitButton(wordInput.current.value);
    }

    clearInputValue(wordInput);
  };

  const handleKeyPressEvent = (e) => {
    return e.key === 'Enter' ? handleSubmitWord(e) : null;
  };

  const handleSubmitWord = (e) => {
    e.preventDefault();

    const { currentWord } = state;

    onClickSubmitButton(currentWord, wordsArray);
  };

  const { currentWord, definition, loading } = state;

  return (
    <Form ref={wordRelayForm} onSubmit={handleSubmitWord}>
      <P className='current-word' content={currentWord} style={{ color: 'white', fontSize: 30 }}></P>
      <Input ref={wordInput} type='text' onKeyPressEvent={handleKeyPressEvent} />
      <Button type={'submit'} content={'입력'} className={''} />
      <P className={loading ? undefined : CLASSNAME.HIDE} content={'사전 검색중...'}></P>
      <P className={loading ? CLASSNAME.HIDE : undefined} content={definition ? definition : ERROR_MESSAGE.EMPTY_INPUT}></P>
      <P style={{ color: COLOR.RED }} ref={errorMessage} content={undefined} className={undefined}></P>
    </Form>
  );
};
