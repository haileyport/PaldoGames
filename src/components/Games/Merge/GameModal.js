import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import gameInfo from "./../../../states/gameInfo";
import { currentUserState } from "./../../../states/user";

const GameModal = ({ gameModal }) => {
  const [game, setGame] = useRecoilState(gameInfo);
  const { user } = useRecoilValue(currentUserState);

  const router = useRouter();

  const getUser = async () => {
    const userId = user.id;
    console.log(userId);
    const res = await axios
      .get(`/api/game/${userId}`)
      .catch((err) => console.log(err));
    console.log(res);
    return res.data.response.totalPoint;
  };

  const updateUser = async (el) => {
    const point = el;
    const userId = user.id;
    const res = await axios.patch(`/api/game`, { userId, point });
  };

  useEffect(() => {
    if (gameModal.message === "You Win!") {
      getUser().then((el) => {
        updateUser(el + 2048);
      });
      setGame({
        game: {
          name: "2048",
          result: null,
        },
        point: 2048,
      });
      router.push("/games/result");
    }
  }, [gameModal.message]);

  return (
    <Modal>
      <Message>{gameModal.message}</Message>
    </Modal>
  );
};

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s 0.8s ease-in;
  & {
    opacity: 1;
  }
`;

const Message = styled.div`
  font-size: 4rem;
  font-weight: 900;
  color: #1e293b;
`;

export default GameModal;
