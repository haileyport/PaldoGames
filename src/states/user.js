import { atom } from "recoil";

const currentUserState = atom({
  key: `currentUser`,
  default: { isLoggedIn: false, user: {} },
});

//커뮤니티 ID, 유저ID
const contentState = atom({
  key: `contentId`,
  default: { contentId: "", userId: "" },
});

export { currentUserState, contentState };
