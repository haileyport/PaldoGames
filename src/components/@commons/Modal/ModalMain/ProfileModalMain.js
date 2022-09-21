import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../../states";

import * as Styled from "./ModalMain.style";
import { Flex } from "../../Flex/Flex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const ProfileModalMain = ({ user }) => {
  // 인벤토리 클릭시 모달창 사라짐
  const [modal, setModal] = useRecoilState(modalStates);
  const [totalPoint, setTotalPoint] = useState({ id: "", point: 0 });

  // 공통되는것 hooks로 관리
  const fetchTotalPoint = useCallback(async () => {
    const { data } = await axios.get(`/api/game/${user.id}`);
    let point;

    if (data.response) {
      point = data.response.totalPoint;
    }

    setTotalPoint({ id: user.id, point });
  }, [user.id]);

  useEffect(() => {
    fetchTotalPoint();
  }, [fetchTotalPoint, totalPoint]);

  return (
    <Styled.InnerModalMain>
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        <Flex flexDirection='column'>
          <Link href='/ranking'>
            <FontAwesomeIcon icon={faCoins} size='2x' style={{ marginBottom: 10, cursor: "pointer" }} />
          </Link>
          <span>{totalPoint.point} 포인트</span>
        </Flex>
        <Flex flexDirection='column' onClick={() => setModal({ ...modal, profile: false })}>
          <Link href='/games/lotto'>
            <FontAwesomeIcon icon={faTicket} size='2x' style={{ marginBottom: 10, cursor: "pointer" }} />
          </Link>
          <span style={{ marginLeft: 5 }}> 로또</span>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
