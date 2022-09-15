import { NavProfile } from './Nav.style';

import { useRecoilState } from 'recoil';
import { modalState } from '../../../states';

import { Flex } from '../../@commons';
import { Modal, ModalHeader, ModalFooter, ModalMain, ModalProfile } from '../../Modal';
import { StyledModalSection } from '../../Modal/Modal.style';

const DUMMY = {
  profileImg: 'https://avatars.githubusercontent.com/u/83988230?v=4',
  githubId: '2kunhee94',
  greetings: `안녕하세요.`,
};

export const Profile = () => {
  const [modal, setModal] = useRecoilState(modalState);

  return (
    <Flex flexDirection='column'>
      <NavProfile type='image' src={DUMMY.profileImg} onClick={() => setModal(!modal)} />
      <div>
        {modal && (
          <Flex>
            <Modal>
              <StyledModalSection width='40%' maxWidth='350px' minWidth='300px' left='40%'>
                <ModalHeader content='배경화면' />
                <ModalProfile DUMMY={DUMMY} />
                <ModalMain />
                <ModalFooter />
              </StyledModalSection>
            </Modal>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
