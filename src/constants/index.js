import baseball from "../../public/baseballthumbnail.jpeg";
import lotto from "../../public/lottothumbnail.jpeg";
import timestables from "../../public/timestablesthumbnail.jpeg";
import merge from "../../public/2048thumbnail.jpeg";

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
    imageUrl: timestables,
    linkUrl: "/games/timestables",
    desc: `2 ~ 19단까지 랜덤으로 나오는 구구단 문제를 맞혀 주세요.

    '게임 시작하기' 버튼을 누르면 참가비 100 포인트가 차감됩니다.
    🙆정답이면 점수를 얻고, 🙅오답이면 다시 기회가 주어집니다.

    3초의 제한 시간 안에 맞히지 못하면 하트가 하나 사라집니다.💔
    하트는 세 개로 총 세 번의 기회가 주어집니다. 
    따라서 7점 이상 획득하면 성공이므로 200 포인트를 지급합니다.💰
    `,
  },
  {
    gameTitle: "숫자야구",
    imageUrl: baseball,
    linkUrl: "/games/baseball",
    desc: `랜덤한 숫자 4개를 맞히는 게임입니다.⚾️

    첫 번째 정답 입력 시, 참가비 100 포인트가 차감됩니다.
    숫자를 입력하면 공이 나옵니다.

    🟢 초록색 공: 숫자와 자리가 모두 일치한 경우
    🟡 노란색 공: 존재하는 숫자인데, 자리가 다른 경우
    🔴 빨간색 공: 없는 숫자인 경우

    기회는 10번입니다.
    10번 안에 정답을 맞히면 400 포인트를 지급합니다.💰`,
  },
  {
    gameTitle: "로또",
    imageUrl: lotto,
    linkUrl: "/games/lotto",
    desc: `원하는 번호 6개를 클릭해 주세요.🎰

    재클릭 하면 선택해제됩니다.
    번호 6개를 선택했을 때, 버튼이 활성화됩니다.

    버튼을 누르면 로또 이용료 자동으로 1000포인트가 차감됩니다.
    1000포인트 이하일 때 시작되지 않습니다.

    0, 1, 2개를 맞췄을 때 => 0 포인트 지급💸
    3개 => 1500 포인트(1.5배) 지급💰
    4개 => 307000 포인트(307배) 지급💵
    5개 => 11391000 포인트(11391배) 지급💳
    6개 => 3213957000 포인트(3213957배) 지급💎`,
  },
  {
    gameTitle: "2048",
    imageUrl: merge,
    linkUrl: "/games/merge",
    desc: `키보드/화면 스와이프를 이용해 같은 숫자를 합쳐 2048이라는 수를 만드는 게임입니다.🧩

    게임 화면으로 들어가면 참가비 100포인트가 차감됩니다.

    2048을 만든 경우 게임이 종료되며, 2048 포인트를 지급합니다.🎁
    'New Game' 버튼으로 게임을 재시작할 수 있으며, 이 때도 참가비 100 포인트가 차감됩니다.`,
  },
]);
