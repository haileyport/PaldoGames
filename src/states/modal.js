import { atom } from 'recoil';

const modalState = atom({
  key: `modalState`,
  default: false,
});

const communityModalState = atom({
  key: 'communityModalState',
  default: false,
});

export { modalState, communityModalState };
