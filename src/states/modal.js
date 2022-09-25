import { atom } from "recoil";

// 추가 하고 싶은 모달 상태 아래 기재

export const modalStates = atom({
  key: `modalStates`,
  default: {
    login: false,
    profile: false,
    community: false,
    post: false,
    editor: false,
    edit: false,
    gameCard: false,
    desc: false,
  },
});
