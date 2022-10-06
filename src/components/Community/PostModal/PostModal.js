import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState, modalStates, postState } from "../../../states";
import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import * as Post from "./PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";
import { POST } from "../../../constants";
import { useGet } from "../../../hooks";

export const PostModal = () => {
  const { user } = useRecoilValue(currentUserState);
  const [selectedUserData, error, loading] = useGet(`/game/${user.id}`);
  const [modal, setModal] = useRecoilState(modalStates);
  const [isDisabled, setIsDisabled] = useState(false);
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

  const renderPost = useCallback(
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

  const postContent = (id, title, content, point) => {
    axios
      .post(`/api/community`, {
        id,
        title,
        content,
      })
      .catch((err) => console.log(err));

    axios.patch(`api/game`, {
      userId: user.id,
      point: point + 100,
    });
  };

  const handlePostDetails = useCallback(
    (e) => {
      e.preventDefault();

      if (isDisabled) return;

      if (!loading && error) console.log("can not fetch user data");

      const titleValue = title.current.value;
      const contentValue = content.current.value;
      const point = selectedUserData.response.totalPoint;

      if (postingValidation(titleValue, contentValue)) {
        setIsDisabled(true);
        postContent(user.id, titleValue, contentValue, point);
        renderPost(titleValue, user.id, contentValue, user);
        setModal({ ...modal, post: false });
      } else {
        alert(POST.EMPTY_INPUT);
      }
    },

    // eslint-disable-next-line
    [isDisabled, selectedUserData, user, renderPost]
  );

  return (
    <Modal>
      <M.Section
        width="80%"
        maxWidth="1000px"
        minWidth="350px"
        maxHeight="1000px"
        style={{ overflowY: "auto" }}
      >
        <ModalHeader content="글쓰기" />
        <ModalProfile user={user} />
        <Post.Main>
          <Post.Form onSubmit={handlePostDetails} disabled={isDisabled}>
            <Flex justifyContent="center">
              <Post.Input
                ref={title}
                type="text"
                placeholder="타이틀을 입력해 주세요."
              />
            </Flex>
            <Flex flexDirection="column" alignItems="center">
              <Post.TextArea
                ref={content}
                type="text"
                placeholder="내용을 입력해 주세요."
              />
              <Post.Button disabled={isDisabled}>글 쓰기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
