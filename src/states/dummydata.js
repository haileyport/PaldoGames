import { atom } from "recoil";

export const postData = atom({
  key: `postData`,
  default: [
    {
      id: 1,
      title: "이건희님의 게시글",
      writer: {
        id: "cl85ws3rk00357c3s4n5rxcny",
        image:
          "http://k.kakaocdn.net/dn/b6LU7y/btrAxN7pb0T/kjrjeKWdQlye2aqZ8ZjxN1/img_640x640.jpg",
        name: "이건희",
        email: "dlrjsgml94@naver.com",
        aboutMe: "반갑습니다 이건희입니다.",
      },
      content: "이건희님의 게시글",
      contentId: "13423",
      viewCount: 0,
      createdAt: "2022.09.18",
    },
    {
      id: 2,
      title: "노종열님의 게시글",
      writer: {
        id: "cl88b26aq0015dovhfy7ph6do",
        image:
          "http://k.kakaocdn.net/dn/bdUmV4/btrsW8QA4ZN/bKHwYFGHTK2KQFxbsLcNj1/img_640x640.jpg",
        name: "노종열",
        email: "jyeol0210@naver.com",
        aboutMe: "반갑습니다 노종렬입니다.",
      },
      content: "노종열님의 게시글",
      contentId: "12442",
      viewCount: 0,
      createdAt: "2022.09.18",
    },
    {
      id: 3,
      title: "전은혜님의 게시글",
      writer: {
        id: "cl85to02e00060sn09tq2sl2y",
        image: "https://avatars.githubusercontent.com/u/50188104?v=4",
        name: "전은혜",
        email: "partyqueen305@gmail.com",
        aboutMe: "반갑습니다 전은혜입니다.",
      },
      content: "전은혜님의 게시글",
      contentId: "12442",
      viewCount: 0,
      createdAt: "2022.09.18",
    },
  ],
});
