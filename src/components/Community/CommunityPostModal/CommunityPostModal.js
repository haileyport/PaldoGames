import styled from 'styled-components';
import { Flex } from '../../@commons';
import { Modal, ModalHeader, ModalProfile } from '../../Modal';
import { StyledModalSection } from '../../Modal/Modal.style';
import { CommunityModalMain } from '../../Modal/ModalMain/CommunityModalMain';

const DUMMY = {
  profileImg: 'https://avatars.githubusercontent.com/u/83988230?v=4',
  githubId: '2kunhee94',
  greetings: `안녕하세요.`,
};

export const CommunityPostModal = ({ user }) => {
  return (
    <Modal>
      <StyledModalSection width='80%' maxWidth='1000px' minWidth='500px' style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <ModalHeader />
        <ModalProfile DUMMY={DUMMY} />
        {/* <CommunityPostForm /> */}
        {/* 댓글 부분 */}
      </StyledModalSection>
    </Modal>
  );
};

const StyledModalPostMain = styled.form`
  padding: 16px;
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
`;

const CommunityPostForm = () => {
  return (
    <StyledModalPostMain type='submit'>
      <Flex justifyContent='center' style={{ marginBottom: '10px' }}>
        {/* 타이틀 부분 */}
        <input type='text' style={{ width: '80%', height: '30px' }} placeholder='타이틀을 입력해 주세요.' />
      </Flex>
      <Flex flexDirection='column' alignItems='center'>
        <label style={{ padding: '0.8em', position: 'absolute', top: '-0.5em', left: '1em', backgroundColor: 'white' }}>Content</label>
        <input
          type='text'
          style={{ width: '80%', height: '300px', padding: '0.8em', ' border-radius': ' 0.5em', border: '2px solid lightblue', outline: 'none' }}
          placeholder='내용을 입력해 주세요.'
        />
        <button style={{ width: '80%', height: '30px' }}>글쓰기</button>
      </Flex>
    </StyledModalPostMain>
  );
};
