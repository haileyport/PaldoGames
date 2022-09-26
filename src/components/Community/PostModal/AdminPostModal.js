import { useCallback, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalStates } from "../../../states";
import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import * as Post from "./PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";
import { ADMIN_INFO, POST } from "../../../constants";
import { postState } from "../../../states/community";
import axios from "axios";

export const AdminPostModal = () => {
  const [modal, setModal] = useRecoilState(modalStates);
  const setPost = useSetRecoilState(postState);

  const title = useRef(null);
  const content = useRef(null);

  const postingValidation = (titleValue, contentValue) => {
    let isValid = false;

    if (titleValue.length === 0 || contentValue.length === 0) {
      isValid;
    } else {
      isValid = true;
    }

    return isValid;
  };

  const updatePost = useCallback(
    (title, editor, content, writer) => {
      setPost((prev) => [
        {
          title,
          editor,
          content,
          writer,
        },
        ...prev,
      ]);
    },
    [setPost]
  );

  const handleAdminPostDetails = useCallback(
    async (e) => {
      e.preventDefault();

      const titleValue = title.current.value;
      const contentValue = content.current.value;

      if (postingValidation(titleValue, contentValue)) {
        await axios
          .post(`/api/community`, {
            id: ADMIN_INFO.id,
            title: titleValue,
            content: contentValue,
          })
          .catch((err) => console.log(err));

        updatePost(titleValue, ADMIN_INFO.id, contentValue, ADMIN_INFO);
        setModal({ ...modal, admin: false });
      } else {
        alert(POST.EMPTY_INPUT);
      }
    },
    [modal, setModal, updatePost]
  );

  return (
    <Modal>
      <M.Section width='80%' maxWidth='1000px' minWidth='350px' maxHeight='1000px' style={{ overflowY: "auto" }}>
        <ModalHeader content='공지' />
        <ModalProfile user={ADMIN_INFO} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={(e) => handleAdminPostDetails(e)}>
            <Flex justifyContent='center'>
              <Post.Input ref={title} type='text' placeholder='타이틀을 입력해 주세요.' />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea ref={content} type='text' placeholder='내용을 입력해 주세요.' />
              <Post.Button>공지글 쓰기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};