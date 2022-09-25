import axios from "axios";
import { useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentState, currentUserState, modalStates, postState } from "../../../states";
import { useFetch } from "../../../hooks";

import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import * as Post from "../PostModal/PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";

export const EditModal = () => {
  const [post, setPost] = useRecoilState(postState);
  const [modal, setModal] = useRecoilState(modalStates);
  const { user } = useRecoilValue(currentUserState);
  const ids = useRecoilValue(contentState);

  const { response } = useFetch("/api/community");

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // db에서 현재 포스트 찾기위한 정보
  const getPostList = post.filter((details) => details.writer.id === ids.userId && details.id === ids.contentId)[0];
  const index = post.findIndex((details) => details.id === getPostList.id);

  const handleEditPost = async (e) => {
    e.preventDefault();

    const _title = titleRef?.current.value;
    const _content = contentRef?.current.value;
    const currentPost = response.filter((post) => post.editor === ids.userId && getPostList.title === post.title)[0];

    axios
      .patch("/api/community", {
        id: currentPost.id,
        title: _title,
        content: _content,
      })
      .then((res) => {
        updatePost(res, index);
      });
  };

  const updatePost = (res, index) => {
    const _post = post.slice();
    const _editedPost = { ...res.data.response, editor: user.id, writer: user };

    _post.splice(index, 1, _editedPost);

    setPost(_post);
    setModal({ ...modal, edit: false });
  };

  return (
    <Modal>
      <M.Section width='80%' maxWidth='1000px' minWidth='500px' maxHeight='1000px' style={{ overflowY: "auto" }}>
        <ModalHeader content='수정하기' />
        <ModalProfile user={user} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={handleEditPost}>
            <Flex justifyContent='center'>
              <Post.Input ref={titleRef} type='text' defaultValue={getPostList.title} />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea ref={contentRef} type='text' defaultValue={getPostList.content} />
              <Post.Button>수정하기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
