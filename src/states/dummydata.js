import { atom } from "recoil";

export const postData = atom({
  key: `postData`,
  default: [
    {
      id: 1,
      title: "이건희님의 게시글",
      writer: {
        id: "cl88qprau0016i83salw7d64y",
        image: "https://avatars.githubusercontent.com/u/83988230?v=4",
        name: "이건희",
        email: "dlrjsgml94@naver.com",
        aboutMe: "반갑습니다 이건희입니다.",
      },
      content: "이건희님의 게시글",
    },
    {
      id: 2,
      title: "노종열님의 게시글",
      writer: {
        id: "cl88rbsx9000634vh34tw1fsu",
        image: "https://avatars.githubusercontent.com/u/96723716?v=4",
        name: "노종열",
        email: "jyeol0210@naver.com",
        aboutMe: "반갑습니다 노종렬입니다.",
      },
      content: "노종열님의 게시글",
    },
    {
      id: 3,
      title: "전은혜님의 게시글",
      writer: {
        id: "cl88qhsxu0090mwn0oj3w3jw0",
        image: "https://avatars.githubusercontent.com/u/50188104?v=4",
        name: "전은혜",
        email: "partyqueen305@gmail.com",
        aboutMe: "반갑습니다 전은혜입니다.",
      },
      content: "전은혜님의 게시글",
    },
    {
      id: 3,
      title: "홍다희님의 게시글",
      writer: {
        id: "cl88u48fa0006gonslpyu9nx1",
        image: "https://avatars.githubusercontent.com/u/107875003?v=4",
        name: "홍다희",
        email: "partyqueen305@gmail.com",
        aboutMe: "반갑습니다 홍다희입니다.",
      },
      content: "홍다희님의 게시글",
    },
  ],
});
