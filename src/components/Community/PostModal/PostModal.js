import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { COMMUNITY_DUMMY, currentUserState, modalStates } from '../../../states';

import { Flex } from '../../@commons';
import { Modal, ModalHeader, ModalProfile } from '../../@commons/Modal';
import * as Post from './PostModal.style';
import * as M from '../../@commons/Modal/Modal.style';
import { postData } from '../../../states/dummydata';

export const PostModal = () => {
  const { user } = useRecoilValue(currentUserState);
  const [post, setPost] = useRecoilState(postData);
  const [modal, setModal] = useRecoilState(modalStates);
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

  const handlePostDetails = (e) => {
    e.preventDefault();

    // const { email, image, name, id, aboutMe } = user;
    const titleValue = title.current.value;
    const contentValue = content.current.value;

    // 로직변경 db로 예정
    if (postingValidation(titleValue, contentValue)) {
      // 고유 id 로 작업해야함 ?

      setPost((prev) => [
        ...prev,
        {
          id: post.length + 1,
          title: titleValue,
          writer: user,
          content: contentValue,
          contentId: Math.floor(Math.random() * 1000),
          viewCount: 0,
          createdAt: '2022.09.18',
        },
      ]);
      setModal({ ...modal, post: false });
    } else {
      alert('제목 혹은 내용을 입력해 주세요.');
    }
  };

  return (
    <Modal>
      <M.Section width='80%' maxWidth='1000px' minWidth='500px' maxHeight='1000px' style={{ overflowY: 'auto' }}>
        <ModalHeader content='글쓰기' />
        {/* 현재유저 */}
        <ModalProfile user={user} />
        <Post.Main type='submit'>
          <Post.Form onSubmit={(e) => handlePostDetails(e)}>
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
