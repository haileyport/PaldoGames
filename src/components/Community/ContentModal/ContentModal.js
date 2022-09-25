import { CommunityModalMain } from "../../";
import * as Styled from "../../@commons/Modal/Modal.style";

import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import { useRecoilValue } from "recoil";
import { contentState } from "../../../states";

export const ContentModal = ({ postData }) => {
  const ids = useRecoilValue(contentState);

  const userIndex = postData.findIndex((user) => user?.writer.id === ids?.userId);
  const user = postData[userIndex];

  return (
    <Modal>
      <Styled.Section width='80%' maxWidth='1000px' minWidth='300px' style={{ maxHeight: "500px", overflowY: "auto" }}>
        <ModalHeader content='게시물' />
        <ModalProfile user={user?.writer} />
        <CommunityModalMain />
      </Styled.Section>
    </Modal>
  );
};
