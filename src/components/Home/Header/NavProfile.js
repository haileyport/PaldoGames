import { NavProfile } from './Nav.style';

import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, modalStates } from '../../../states';

import { Flex } from '../../@commons';
import { Modal, ModalHeader, ModalFooter, ModalMain, ModalProfile } from '../../Modal';
import { StyledModalSection } from '../../Modal/Modal.style';
import axios from 'axios';

const DUMMY = {
  profileImg: 'https://avatars.githubusercontent.com/u/83988230?v=4',
  githubId: '2kunhee94',
  greetings: `안녕하세요.`,
};

const getUser = async () => {
  const response = await axios.get('/api/user');

  console.log(response.data);

  return response.data;
};

export const Profile = () => {
  const [modal, setModal] = useRecoilState(modalStates);
  const currentUser = useRecoilValue(currentUserState);

  return (
    <Flex flexDirection='column'>
      <NavProfile type='image' src={DUMMY.profileImg} onClick={() => setModal({ ...modal, profile: true })} />
      <div>
        {modal.profile && (
          <Flex>
            <Modal>
              <StyledModalSection width='40%' maxWidth='350px' minWidth='300px' left='40%'>
                <ModalHeader content='프로필' />
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

{
  /* <Flex flexDirection='column'>
{console.log(currentUser)}
<NavProfile type='image' src={DUMMY.profileImg} onClick={() => setModal(!modal)} />
<div>
  {modal && (
    <Flex>
      <Modal>
        <StyledModalSection width='40%' maxWidth='350px' minWidth='300px' left='40%'>
          <ModalHeader content='프로필' />
          <ModalProfile DUMMY={DUMMY} />
          <ModalMain />
          <ModalFooter />
        </StyledModalSection>
      </Modal>
    </Flex>
  )}
</div>
</Flex> */
}
