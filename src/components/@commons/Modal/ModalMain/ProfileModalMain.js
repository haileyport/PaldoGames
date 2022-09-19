import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, modalStates } from '../../../../states';

import * as Styled from './ModalMain.style';
import { Flex } from '../../Flex/Flex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { useCallback, useEffect } from 'react';
import axios from 'axios';
import { totalPointState } from '../../../../states/user';

export const ProfileModalMain = () => {
  // 인벤토리 클릭시 모달창 사라짐
  const [modal, setModal] = useRecoilState(modalStates);
  const { user } = useRecoilValue(currentUserState);
  const [totalPoint, setTotalPoint] = useRecoilState(totalPointState);

  const fetchTotalPoint = useCallback(async () => {
    const { data } = await axios.get(`/api/game/${user.id}`);
    let point;

    if (data.response) {
      point = data.response.totalPoint;
    } else {
      point = 0;
    }

    setTotalPoint({ id: user.id, point });
  }, []);

  useEffect(() => {
    fetchTotalPoint();
  }, [totalPoint]);

  return (
    <Styled.InnerModalMain>
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        <Flex flexDirection='column'>
          <FontAwesomeIcon icon={faBitcoin} size='2x' style={{ marginBottom: 10, cursor: 'pointer' }} />
          <span>{totalPoint.point} BTC</span>
        </Flex>
        <Flex flexDirection='column' onClick={() => setModal({ ...modal, profile: false })}>
          <Link href='/inventories'>
            <FontAwesomeIcon icon={faBoxOpen} size='2x' style={{ marginBottom: 10, cursor: 'pointer' }} />
          </Link>
          <span>인벤토리</span>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
