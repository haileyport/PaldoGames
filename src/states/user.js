import { atom } from "recoil";

// 현재 로그인 된 유저
const currentUserState = atom({
  key: `currentUser`,
  default: { isLoggedIn: false, user: {} },
});

// 커뮤니티
const contentState = atom({
  key: `contentId`,
  default: { contentId: "", userId: "", editorId: "" },
});

export { currentUserState, contentState };
