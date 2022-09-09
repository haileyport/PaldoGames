import { atom } from 'recoil';

export default atom({
  key: `wordRelayGameInfo`,
  default: { lives: 3, count: 0, points: 0 },
});
