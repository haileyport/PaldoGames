import axios from "axios";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../../states";

import * as Styled from "./ModalMain.style";
import { Flex } from "../../Flex/Flex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

import { useCallback, useEffect, useState } from "react";

export const ProfileModalMain = ({ user }) => {
  const [modal, setModal] = useRecoilState(modalStates);
  const [totalPoint, setTotalPoint] = useState(null);

  const fetchTotalPoint = useCallback(async () => {
    await axios.get(`/api/game/${user.id}`).then((res) => {
      const data = res.data;
      const point = data.response.totalPoint;

      setTotalPoint(point);

      return point;
    });
  }, [user]);

  useEffect(() => {
    fetchTotalPoint();

    return () => fetchTotalPoint();
  }, [fetchTotalPoint]);

  return (
    <Styled.InnerModalMain>
      <Flex
        justifyContent="space-between"
        style={{ margin: 40, marginTop: 20 }}
      >
        <Flex flexDirection="column">
          {(totalPoint || totalPoint === 0) && (
            <>
              <Link href="/ranking">
                <FontAwesomeIcon
                  icon={faCoins}
                  size="2x"
                  style={{ marginBottom: 10, cursor: "pointer" }}
                  onClick={() => setModal({ ...modal, profile: false })}
                />
              </Link>
              <span>{totalPoint} 포인트</span>
            </>
          )}
        </Flex>
        <Flex
          flexDirection="column"
          onClick={() => setModal({ ...modal, profile: false })}
        >
          <Link href="/games/lotto">
            <FontAwesomeIcon
              icon={faTicket}
              size="2x"
              style={{ marginBottom: 10, cursor: "pointer" }}
            />
          </Link>
          <span style={{ marginLeft: 5 }}> 로또</span>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
