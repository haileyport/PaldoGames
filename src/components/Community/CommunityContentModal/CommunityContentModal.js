import { Modal, ModalHeader, ModalProfile } from '../../Modal';
import { StyledModalSection } from '../../Modal/Modal.style';
import { CommunityModalMain } from '../../Modal/ModalMain/CommunityModalMain';

const DUMMY = {
  profileImg: 'https://avatars.githubusercontent.com/u/83988230?v=4',
  githubId: '2kunhee94',
  greetings: `안녕하세요.`,
};

export const CommunityContentModal = ({ user }) => {
  return (
    <Modal>
      <StyledModalSection width='80%' maxWidth='1000px' minWidth='500px' style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <ModalHeader content='쓴 글 보기' />
        <ModalProfile DUMMY={DUMMY} />
        <CommunityModalMain user={user} />
        {/* 댓글 부분 */}
      </StyledModalSection>
    </Modal>
  );
};
