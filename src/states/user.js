import { atom } from 'recoil';

const currentUserState = atom({
  key: `currentUser`,
  default: { isLoggedIn: false, currentUser: {} },
});

export { currentUserState };
