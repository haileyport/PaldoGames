import { CommunityModalMain } from '../..';
import * as Styled from '../../@commons/Modal/Modal.style';

import { Modal, ModalHeader, ModalProfile } from '../../@commons/Modal';
import { useRecoilValue } from 'recoil';
import { contentState } from '../../../states';

export const ContentModal = ({ users }) => {
  const ids = useRecoilValue(contentState);

  const userIndex = users.findIndex((user) => user.writer.id === ids.userId);
  const user = users[userIndex];

  return (
    <Modal>
      <Styled.Section width='80%' maxWidth='1000px' minWidth='500px' style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <ModalHeader content='게시물' />
        <ModalProfile user={user.writer} />
        <CommunityModalMain user={user} />
        {/* 댓글 부분 */}
      </Styled.Section>
    </Modal>
  );
};
