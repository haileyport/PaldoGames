import { atom } from "recoil";

export default atom({
  key: `gameInfo`,
  default: {
    game: {
      name: null,
      answer: null,
    },
    point: 0,
  },
});
