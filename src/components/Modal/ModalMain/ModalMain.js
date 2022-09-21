import Link from 'next/link';
import { Flex } from '../../@commons/Flex/Flex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../states';
import { StyledInnerModalMain } from './ModalMain.style';

export const ModalMain = (props) => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <StyledInnerModalMain>
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        <Flex flexDirection='column'>
          <FontAwesomeIcon icon={faBitcoin} size='2x' style={{ marginBottom: 10, cursor: 'pointer' }} />
          <span>1,000 BTC</span>
        </Flex>
        <Flex flexDirection='column' onClick={() => setModal(!modal)}>
          <Link href='/inventories'>
            <FontAwesomeIcon icon={faBoxOpen} size='2x' style={{ marginBottom: 10, cursor: 'pointer' }} />
          </Link>
          <span>인벤토리</span>
        </Flex>
      </Flex>
    </StyledInnerModalMain>
  );
};
