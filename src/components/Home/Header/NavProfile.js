import { NavProfile } from './Nav.style';

import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, modalStates } from '../../../states';

import { Flex } from '../../@commons';
import { Modal, ModalHeader, ModalFooter, ProfileModalMain, ModalProfile } from '../../@commons/Modal';
import * as Styled from '../../@commons/Modal/Modal.style';
import * as StyledNav from './Nav.style';

export const Profile = () => {
  const [modal, setModal] = useRecoilState(modalStates);
  const { user } = useRecoilValue(currentUserState);
  console.log(user);

  return (
    <Flex flexDirection='column'>
      <StyledNav.Profile type='image' src={user?.image} onClick={() => setModal({ ...modal, profile: true })} />
      <div>
        {modal.profile && (
          <Flex>
            <Modal>
              <Styled.Section width='40%' maxWidth='350px' minWidth='300px' left='40%'>
                <ModalHeader content='프로필' />
                <ModalProfile user={user} />
                <ProfileModalMain />
                <ModalFooter />
              </Styled.Section>
            </Modal>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
