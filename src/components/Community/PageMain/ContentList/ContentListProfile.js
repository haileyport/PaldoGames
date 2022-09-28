import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { contentState } from "../../../../states";
import { Flex } from "../../../@commons";
import { Modal, ModalFooter, ModalHeader, ModalProfile, ProfileModalMain } from "../../../@commons/Modal";
import * as Styled from "../../../@commons/Modal/Modal.style";

export const ContentListProfile = () => {
  const [editor, setEditor] = useState(null);
  const { editorId } = useRecoilValue(contentState);

  const fetchEditorProfile = useCallback((userId) => {
    axios
      .get(`/api/user/id/${userId}`)
      .then((res) => {
        const data = res.data;

        setEditor(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchEditorProfile(editorId);

    return () => {};
  }, [editorId, fetchEditorProfile]);

  return (
    <Flex>
      <Modal>
        <Styled.Section width='40%' maxWidth='350px' minWidth='300px' left='40%'>
          <ModalHeader content='프로필' />
          {editor !== null && (
            <>
              <ModalProfile user={editor} />
              <ProfileModalMain user={editor} />
            </>
          )}
          <ModalFooter />
        </Styled.Section>
      </Modal>
    </Flex>
  );
};
