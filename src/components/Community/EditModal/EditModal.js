import { Flex } from "../../@commons";
import { useRecoilState, useRecoilValue } from "recoil";
import { Modal, ModalHeader, ModalProfile } from "../../@commons/Modal";

import * as Post from "../PostModal/PostModal.style";
import * as M from "../../@commons/Modal/Modal.style";
import { contentState, currentUserState, modalStates } from "../../../states";
import { useRef } from "react";
import { postState } from "../../../states/community";
import axios from "axios";

export const EditModal = () => {
  const ids = useRecoilValue(contentState);
  const [post, setPost] = useRecoilState(postState);
  const { user } = useRecoilValue(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);

  const _Title = useRef(null);
  const _Content = useRef(null);

  const currentPost = post.filter((details) => details.writer.id === ids.userId && details.id === ids.contentId)[0];
  const index = post.findIndex((details) => details.id === currentPost.id);

  const handleEditPost = async (e) => {
    e.preventDefault();

    const _post = post.slice();

    const _title = _Title.current.value;
    const _content = _Content.current.value;
    const _editedPost = { id: currentPost.id, title: _title, content: _content, editor: user.id, writer: user };

    _post.splice(index, 1, _editedPost);

    setPost(_post);

    // await axios
    //   .patch(`/api/community`, {
    //     id: currentPost.id,
    //     title: _title,
    //     content: _content,
    //   })
    //   .catch((err) => console.log(err));

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
              <Post.Input ref={_Title} type='text' defaultValue={currentPost.title} />
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
              <Post.TextArea ref={_Content} type='text' defaultValue={currentPost.content} />
              <Post.Button>수정하기</Post.Button>
            </Flex>
          </Post.Form>
        </Post.Main>
      </M.Section>
    </Modal>
  );
};
