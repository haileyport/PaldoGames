import { ERROR_MESSAGE, 한글_정규표현식 } from '../../constants';

export const isValidInputWord = (errorMessage) => {
  let isValid = false;

  if (!errorMessage) {
    isValid = true;
  }

  return isValid;
};

export const clearInputValue = (...inputs) => {
  inputs.map((input) => (input.current.value = ''));
};

export const handleErrorMessage = (word, currentWord, wordsArray) => {
  let errorMessage;

  if ((word.length > 3 || word.length < 3) && 한글_정규표현식.test(word)) {
    errorMessage = ERROR_MESSAGE.NOT_THREE_WORD;
  } else if (!한글_정규표현식.test(word)) {
    errorMessage = ERROR_MESSAGE.NOT_KOREAN;
  } else if (currentWord.at(-1) !== word.at(0)) {
    errorMessage = ERROR_MESSAGE.NOT_CORRESPONDING_LETTER;
  } else if (wordsArray.includes(word)) {
    errorMessage = ERROR_MESSAGE.ALREADY_HAS_SAME_WORD;
  } else {
    errorMessage = undefined;
  }

  return errorMessage;
};

export const handleGameResetMessage = (lives) => {
  let errorMessage;

  lives === 0 ? (errorMessage = '더이상 목숨이 남아있지 않습니다. 게임을 다시 시작 합니다.') : (errorMessage = undefined);

  return errorMessage;
};
