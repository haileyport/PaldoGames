import { CommunityModalMain } from "../../";
import * as Styled from "../../@commons/Modal/Modal.style";

import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import { useRecoilValue } from "recoil";
import { contentState } from "../../../states";

export const ContentModal = ({ postData }) => {
  const ids = useRecoilValue(contentState);

  const index = postData.findIndex((post) => post.title === ids.editorId && post.editor === ids.userId);

  const user = postData[index];

  return (
    <Modal>
      <Styled.Section width='80%' maxWidth='1000px' minWidth='300px' style={{ maxHeight: "500px", overflowY: "auto" }}>
        <ModalHeader content='게시물' />
        <ModalProfile user={user?.writer} />
        <CommunityModalMain postData={postData} />
      </Styled.Section>
    </Modal>
  );
};
