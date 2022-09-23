import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalStates, currentUserState, contentState } from "../../../states";

import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalFooter, ProfileModalMain, ModalProfile } from "../../@commons/Modal";
import * as Styled from "../../@commons/Modal/Modal.style";
import * as StyledNav from "./Nav.style";

export const Profile = () => {
  const [modal, setModal] = useRecoilState(modalStates);
  const [editor, setEditor] = useState("");
  const { user } = useRecoilValue(currentUserState);
  const { editorId } = useRecoilValue(contentState);

  let current;

  const fetchEditorProfile = async (userId) => {
    const { data } = await axios.get(`/api/user/id/${userId}`);

    setEditor((prev) => (prev = data.user));
  };

  useEffect(() => {
    if (editorId) fetchEditorProfile(editorId);
  }, [editorId]);

  modal.profile ? (current = user) : (current = editor);

  return (
    <Flex flexDirection='column'>
      <StyledNav.Profile type='image' src={user?.image} onClick={() => setModal({ ...modal, profile: true })} />
      <div>
        {(modal.profile || modal.editor) && (
          <Flex>
            <Modal>
              <Styled.Section width='40%' maxWidth='350px' minWidth='300px' left='40%'>
                <ModalHeader content='프로필' />
                <ModalProfile user={current} />
                <ProfileModalMain user={current} />
                <ModalFooter />
              </Styled.Section>
            </Modal>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
