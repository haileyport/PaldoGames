import baseball from "../../public/baseballthumbnail.jpeg";
import lotto from "../../public/lottothumbnail.jpeg";
import timestables from "../../public/timestablesthumbnail.jpeg";
import merge from "../../public/2048thumbnail.jpeg";
import Logo from "../../public/logo.png";

export const COMMUNITY_ADMINS = Object.freeze([
  {
    id: "cl88qhsxu0090mwn0oj3w3jw0",
  },
  {
    id: "cl88qprau0016i83salw7d64y",
  },
  {
    id: "heewhy3513@gmail.com",
  },
  {
    id: "cl8a9v3sc0026q4vhtdwbqkzg",
  },
]);

export const ADMIN_INFO = Object.freeze({
  id: "cl8ibrkfb00436gn0jsc7czx0",
  name: "팔도게임즈",
  image: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGljZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  aboutMe: "팔도게임즈 입니다.",
  email: "",
});

export const POST = Object.freeze({
  EMPTY_INPUT: "제목 혹은 내용을 입력해주시기 바랍니다.",
});

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
