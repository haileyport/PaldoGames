import Link from 'next/link';
import { Flex } from '../../@commons/Flex/Flex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../states';

export const ModalMain = (props) => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <main>
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        <Flex flexDirection='column'>
          <FontAwesomeIcon icon={faBitcoin} size='2x' style={{ marginBottom: 10, cursor: 'pointer' }} />
          <span>1,000 BTC</span>
        </Flex>
        <Link href='/inventories'>
          <Flex flexDirection='column' onClick={() => setModal(!modal)}>
            <FontAwesomeIcon icon={faBoxOpen} size='2x' style={{ marginBottom: 10, cursor: 'pointer' }} />
            <span>인벤토리</span>
          </Flex>
        </Link>
      </Flex>
    </main>
  );
};
