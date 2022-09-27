import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserState, modalStates } from "../../../states";
import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import * as Post from "./PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";
import { POST } from "../../../constants";
import { postState } from "../../../states/community";
import axios from "axios";

export const PostModal = () => {
  const { user } = useRecoilValue(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);
  const [totalPoint, setTotalPoint] = useState({ id: "", point: 0 });
  const setPost = useSetRecoilState(postState);

  const title = useRef(null);
  const content = useRef(null);

  const fetchTotalPoint = useCallback(async () => {
    const { data } = await axios.get(`/api/game/${user.id}`);
    let point;

    if (data.response) {
      point = data.response.totalPoint;
      setTotalPoint({ id: user.id, point });
    } else {
      point = 0;
    }
  }, [user.id]);

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

  const handlePostDetails = useCallback(
    async (e) => {
      e.preventDefault();

      const titleValue = title.current.value;
      const contentValue = content.current.value;
      const { point } = totalPoint;

      if (postingValidation(titleValue, contentValue)) {
        await axios
          .post(`/api/community`, {
            id: user.id,
            title: titleValue,
            content: contentValue,
          })
          .catch((err) => console.log(err));

        await axios.patch(`api/game`, { userId: user.id, point: point + 100 });

        updatePost(titleValue, user.id, contentValue, user);
        setModal({ ...modal, post: false });
      } else {
        alert(POST.EMPTY_INPUT);
      }
    },
    [modal, setModal, totalPoint, updatePost, user]
  );

  useEffect(() => {
    fetchTotalPoint();
  }, [fetchTotalPoint]);

  return (
    <Modal>
      <M.Section width='80%' maxWidth='1000px' minWidth='350px' maxHeight='1000px' style={{ overflowY: "auto" }}>
        <ModalHeader content='글쓰기' />
        <ModalProfile user={user} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={handlePostDetails}>
            <Flex justifyContent='center'>
              <Post.Input ref={title} type='text' placeholder='타이틀을 입력해 주세요.' />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea ref={content} type='text' placeholder='내용을 입력해 주세요.' />
              <Post.Button>글 쓰기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
