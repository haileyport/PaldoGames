import { atom } from 'recoil';

const currentUserState = atom({
  key: `currentUser`,
  default: { isLoggedIn: false, user: {} },
});

const contentState = atom({
  key: `contentId`,
  default: { contentId: '', userId: '' },
});

const totalPointState = atom({
  key: 'totalPoint',
  default: { id: '', point: 0 },
});

export { currentUserState, contentState, totalPointState };
