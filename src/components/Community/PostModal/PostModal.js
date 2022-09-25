import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
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
  const [post, setPost] = useRecoilState(postState);
  const [totalPoint, setTotalPoint] = useState({ id: "", point: 0 });

  const title = useRef(null);
  const content = useRef(null);

  // 공통되는것 hooks로 관리
  const fetchTotalPoint = useCallback(async () => {
    const { data } = await axios.get(`/api/game/${user.id}`);
    let point;

    if (data.response) {
      point = data.response.totalPoint;
    } else {
      point = 0;
    }

    setTotalPoint({ id: user.id, point });
  }, [user.id]);

  useEffect(() => {
    fetchTotalPoint();
  }, [fetchTotalPoint, totalPoint]);

  const postingValidation = (titleValue, contentValue) => {
    let isValid = false;

    if (titleValue.length === 0 || contentValue.length === 0) {
      isValid;
    } else {
      isValid = true;
    }

    return isValid;
  };

  const handlePostDetails = async (e) => {
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
        .then((res) => {
          console.log(res.status);
        })
        .catch((err) => console.log(err));

      await axios.patch(`api/game`, { userId: user.id, point: point + 100 });

      setPost((prev) => [
        ...prev,
        {
          title: titleValue,
          editor: user.id,
          content: contentValue,
          writer: user,
        },
      ]);

      setModal({ ...modal, post: false });
    } else {
      alert(POST.EMPTY_INPUT);
    }
  };

  return (
    <Modal>
      <M.Section width='80%' maxWidth='1000px' minWidth='500px' maxHeight='1000px' style={{ overflowY: "auto" }}>
        <ModalHeader content='글쓰기' />
        {/* 현재유저 */}
        <ModalProfile user={user} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={handlePostDetails}>
            <Flex justifyContent='center'>
              <Post.Input ref={title} type='text' placeholder='타이틀을 입력해 주세요.' />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea ref={content} type='text' placeholder='내용을 입력해 주세요.' />
              <Post.Button>글쓰기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
