import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();

  const getUser = async () => {
    const res = await axios.get("/api/user").catch((err) => console.log(err));
    console.log(res);
    console.log("---user---");
    console.log(res.data.users);
    setUser(res.data.users);
  };

  const updateUser = async () => {
    const userId = id; // id값은 전역으로 저장해서 들고 다니기
    const aboutMe = "안녕하세요?";
    const res = await axios.patch(`api/user`, { userId, aboutMe });
    console.log(res.data);
    console.log(id);
  };

  const getId = async () => {
    const res = await axios.get(`/api/user/id/${id}`).catch((err) => console.log(err));
    console.log("---res---");
    console.log(res);
  };

  const getEmail = async () => {
    const email = "2kunhee94@gmail.com";
    const res = await axios.get(`/api/user/email/${email}`).catch((err) => console.log(err));
    const { data } = res;
    console.log("---res---");
    console.log(data.user);
    setEmail(email);
    setId(data.user.id);
    console.log(id);
  };

  const getGame = async () => {
    const userId = id; // id값은 전역으로 저장해서 들고 다니기
    const res = await axios.get(`/api/game/${userId}`).catch((err) => console.log(err));
    console.log("---res---");
    console.log(res);
  };

  const handleGame = async () => {
    const res = await axios.post(`/api/game`, {
      id,
    });
  };

  const updateGame = async () => {
    const point = 3000;
    const userId = id; // id값은 전역으로 저장해서 들고 다니기
    const res = await axios.patch(`api/game`, { userId, point });
    console.log(res.data.totalPoint);
  };

  return (
    <div>
      안녕하세요?
      <button onClick={getUser}>유저</button>
      <button onClick={getId}>아이디로 유저 찾기</button>
      <button onClick={getEmail}>이메일로 유저 찾기</button>
      <button onClick={handleGame}>게임TB 생성하기</button>
      <button onClick={getGame}>아이디로 유저 game정보 찾기</button>
      <button onClick={updateGame}>아이디로 유저 game 정보 update하기</button>
      <button onClick={updateUser}>아이디로 유저 정보 update하기</button>
    </div>
  );
}
