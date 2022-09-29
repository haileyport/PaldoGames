import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useGet } from "../../../../hooks";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../../states";

import * as Styled from "./ModalMain.style";
import { Flex } from "../../Flex/Flex";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

export const ProfileModalMain = ({ user }) => {
  const [modal, setModal] = useRecoilState(modalStates);
  const [totalPoint, setTotalPoint] = useState(null);
  const [userData, error, loading] = useGet(`/game/${user.id}`);

  const fetchTotalPoint = useCallback(() => {
    if (!error && !loading) setTotalPoint(userData.response.totalPoint);

    // eslint-disable-next-line
  }, [userData]);

  useEffect(() => {
    fetchTotalPoint();
  }, [fetchTotalPoint]);

  return (
    <Styled.InnerModalMain>
      <Flex
        justifyContent='space-between'
        style={{ margin: 40, marginTop: 20 }}
      >
        <Flex flexDirection='column'>
          {(totalPoint || totalPoint === 0) && (
            <>
              <Link href='/ranking'>
                <FontAwesomeIcon
                  icon={faCoins}
                  size='2x'
                  style={{ marginBottom: 10, cursor: "pointer" }}
                  onClick={() => setModal({ ...modal, profile: false })}
                />
              </Link>
              <span>{totalPoint} 포인트</span>
            </>
          )}
        </Flex>
        <Flex
          flexDirection='column'
          onClick={() => setModal({ ...modal, profile: false })}
        >
          <Link href='/games/lotto'>
            <FontAwesomeIcon
              icon={faTicket}
              size='2x'
              style={{ marginBottom: 10, cursor: "pointer" }}
            />
          </Link>
          <span style={{ marginLeft: 5 }}> 로또</span>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
