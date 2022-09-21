import baseball from "../../public/baseball.png";

// Word Relay Game related
export const CLASSNAME = Object.freeze({
  HIDE: "hide",
});

export const COLOR = Object.freeze({
  RED: "red",
});

export const DEFAULT = Object.freeze({
  GIVEN_WORDS: "자판기",
});

// Validation
export const ERROR_MESSAGE = Object.freeze({
  NOT_THREE_WORD: "세글자만 입력이 가능합니다.",
  NOT_KOREAN: "한글만 입력이 가능합니다.",
  NOT_CORRESPONDING_LETTER: `단어의 마지막 글자와 ${"\t"}입력단어의 첫번째 단어가 일치해야 합니다.`,
  EMPTY_INPUT: "사전에 정의되지 않은 단어입니다.",
  ALREADY_HAS_SAME_WORD: "이미 입력했던 단어는 입력하실 수 없습니다.",
  NOT_EXIST: "사전에 정의되지 않는 단어입니다.",
});

export const POST = Object.freeze({
  EMPTY_INPUT: "제목 혹은 내용을 입력해 주세요.",
});

// Regex
export const 한글_정규표현식 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

export const GAME_LIST = Object.freeze([
  {
    gameTitle: "구구단",
    imageUrl: baseball,
    linkUrl: "/games/timestables",
    desc: "구구단 게임 입니다.",
  },
  {
    gameTitle: "숫자야구",
    imageUrl: baseball,
    linkUrl: "/games/baseball",
    desc: "숫자야구 게임 입니다.",
  },
  {
    gameTitle: "로또",
    imageUrl: baseball,
    linkUrl: "/games/lotto",
    desc: "로또 입니다.",
  },
]);
