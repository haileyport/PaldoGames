import { atom } from "recoil";

// 현재 로그인 된 유저
export const currentUserState = atom({
  key: `currentUser`,
  default: { isLoggedIn: false, isAdmin: false, user: {} },
});

export const adminState = atom({
  key: "adminUser",
  default: false,
});

// 커뮤니티
export const contentState = atom({
  key: `contentId`,
  default: { contentId: "", userId: "", title: "", editorId: "" },
});
