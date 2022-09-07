import { NavProfile } from './Nav.style';

import { useRecoilState } from 'recoil';
import { modalState } from '../../../states';

import { Flex } from '../../@commons';
import { Modal, ModalHeader, ModalFooter, ModalMain, ModalProfile } from '../../Modal';

const DUMMY = {
  profileImg: 'https://avatars.githubusercontent.com/u/83988230?v=4',
  githubId: '2kunhee94',
  greetings: `안녕하세요.`,
};

export const Profile = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const handleModal = () => setModal(!modal);

  return (
    <Flex flexDirection='column'>
      <NavProfile type='image' src={DUMMY.profileImg} onClick={handleModal}></NavProfile>
      <div>
        {modal && (
          <Modal>
            <section>
              <ModalHeader handleModal={handleModal} />
              <ModalProfile DUMMY={DUMMY} />
              <ModalMain />
              <ModalFooter />
            </section>
          </Modal>
        )}
      </div>
    </Flex>
  );
};
