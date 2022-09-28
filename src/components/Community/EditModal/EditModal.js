import axios from "axios";
import { useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentState, currentUserState, modalStates, postState } from "../../../states";
import { useFetch } from "../../../hooks";

import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import * as Post from "../PostModal/PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";
import { ADMIN_INFO, COMMUNITY_ADMINS } from "../../../constants";

export const EditModal = () => {
  const [post, setPost] = useRecoilState(postState);
  const [modal, setModal] = useRecoilState(modalStates);
  const [isDisabled, setIsDisabled] = useState(false);
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

    if (isDisabled) return;

    const _title = titleRef?.current.value;
    const _content = contentRef?.current.value;

    const currentPost = response.filter((post) => post.editor === ids.userId && getPostList.title === post.title)[0];

    setIsDisabled(true);
    await axios
      .patch("/api/community", {
        id: currentPost.id,
        title: _title,
        content: _content,
      })
      .then((res) => {
        if (res.status === 200) {
          editPost(res, index, currentPost);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPost = (res, index, currentPost) => {
    const _post = [...post];
    let _editedPost;

    if (currentPost.editor === ADMIN_INFO.id) {
      COMMUNITY_ADMINS.map((admin) => {
        if (admin.id === user.id) {
          _editedPost = { ...res.data.response, editor: ADMIN_INFO.id, writer: ADMIN_INFO };
        }
      });
    } else {
      _editedPost = { ...res.data.response, editor: user.id, writer: user };
    }

    _post.splice(index, 1, _editedPost);

    setPost((prev) => (prev = _post));
    setModal({ ...modal, edit: false });
  };

  return (
    <Modal>
      <M.Section width='80%' maxWidth='1000px' minWidth='500px' maxHeight='1000px' style={{ overflowY: "auto" }}>
        <ModalHeader content='수정하기' />
        <ModalProfile user={user} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={handleEditPost} disabled={isDisabled}>
            <Flex justifyContent='center'>
              <Post.Input ref={titleRef} type='text' defaultValue={getPostList.title} />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea ref={contentRef} type='text' defaultValue={getPostList.content} />
              <Post.Button disabled={isDisabled}>수정하기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
