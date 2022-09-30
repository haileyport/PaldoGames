import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useGet } from "../../../../hooks";
import { contentState } from "../../../../states";
import { Flex } from "../../../@commons";
import {
  Modal,
  ModalHeader,
  ModalProfile,
  ProfileModalMain,
} from "../../../@commons/Modal";
import * as Styled from "../../../@commons/Modal/Modal.style";

export const ContentListProfile = () => {
  const [editor, setEditor] = useState(null);
  const { editorId } = useRecoilValue(contentState);
  const [userData, error, loading] = useGet(`/user/id/${editorId}`);

  const getUserProfile = useCallback(() => {
    if (!error && !loading) {
      const user = userData.user;

      setEditor(user);
    }

    // eslint-disable-next-line
  }, [userData]);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  return (
    <Flex>
      <Modal>
        <Styled.Section
          width="40%"
          maxWidth="350px"
          minWidth="300px"
          left="40%"
        >
          <ModalHeader content="프로필" />
          {editor !== null && (
            <>
              <ModalProfile user={editor} />
              <ProfileModalMain user={editor} />
            </>
          )}
        </Styled.Section>
      </Modal>
    </Flex>
  );
};
