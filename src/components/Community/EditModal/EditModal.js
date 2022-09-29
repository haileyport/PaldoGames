import axios from "axios";
import { useCallback, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  contentState,
  currentUserState,
  modalStates,
  postState,
} from "../../../states";
import { Flex } from "../../@commons";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";
import * as Post from "../PostModal/PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";
import { ADMIN_INFO, COMMUNITY_ADMINS } from "../../../constants";
import { useGet } from "../../../hooks";

export const EditModal = () => {
  const { user } = useRecoilValue(currentUserState);
  const [communityData] = useGet("/community");
  const [post, setPost] = useRecoilState(postState);
  const [modal, setModal] = useRecoilState(modalStates);
  const [isDisabled, setIsDisabled] = useState(false);
  const ids = useRecoilValue(contentState);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  // db에서 현재 포스트 찾기위한 정보
  const getPostList = post.filter(
    (details) =>
      details.writer.id === ids.userId && details.id === ids.contentId
  )[0];
  const index = post.findIndex((details) => details.id === getPostList.id);

  const handleModifyPost = useCallback(
    (e) => {
      e.preventDefault();

      if (isDisabled) return;

      const _title = titleRef?.current.value;
      const _content = contentRef?.current.value;
      const postList = communityData.response;

      const currentPost = postList.filter(
        (post) => post.editor === ids.userId && getPostList.title === post.title
      )[0];

      setIsDisabled(true);
      modifyPost(currentPost, index, _title, _content);
    },

    // eslint-disable-next-line
    [communityData, isDisabled]
  );

  const modifyPost = (currentPost, index, title, content) => {
    axios
      .patch("/api/community", {
        id: currentPost.id,
        title,
        content,
      })
      .then((res) => {
        renderPost(res, index, currentPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPost = (res, index, currentPost) => {
    let _editedPost;

    if (currentPost.editor === ADMIN_INFO.id) {
      COMMUNITY_ADMINS.map((admin) => {
        if (admin.id === user.id) {
          _editedPost = {
            ...res.data.response,
            editor: ADMIN_INFO.id,
            writer: ADMIN_INFO,
          };
        }
      });
    } else {
      _editedPost = { ...res.data.response, editor: user.id, writer: user };
    }

    const modified = [
      ...post.slice(0, index),
      _editedPost,
      ...post.slice(index + 1),
    ];

    setPost(modified);
    setModal({ ...modal, edit: false });
  };

  return (
    <Modal>
      <M.Section
        width='80%'
        maxWidth='1000px'
        minWidth='500px'
        maxHeight='1000px'
        style={{ overflowY: "auto" }}
      >
        <ModalHeader content='수정하기' />
        <ModalProfile user={user} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={handleModifyPost} disabled={isDisabled}>
            <Flex justifyContent='center'>
              <Post.Input
                ref={titleRef}
                type='text'
                defaultValue={getPostList.title}
              />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea
                ref={contentRef}
                type='text'
                defaultValue={getPostList.content}
              />
              <Post.Button disabled={isDisabled}>수정하기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
