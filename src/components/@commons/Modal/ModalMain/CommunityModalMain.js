import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { contentState, currentUserState, modalStates } from "../../../../states";
import { postState } from "../../../../states/community";
import { Flex } from "../../Flex/Flex";
import { P } from "../../P/P";
import * as Styled from "./ModalMain.style";

export const CommunityModalMain = () => {
  // 게시물의 번호를 고유id 로 관리해서 검증시에 userId 와 게시물Id 까지 맞으면 렌더링
  const ids = useRecoilValue(contentState);
  const [post, setPost] = useRecoilState(postState);
  const { user } = useRecoilValue(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);

  const currentPost = post.filter((details) => details.writer.id === ids.userId && details.id === ids.contentId)[0];
  const iAmTheOne = user.id === currentPost.writer.id;

  const deletePost = async () => {
    // 추후에 정말 삭제할건지 물어보기
    // 리렌더링
    // id 가 유실됨

    // delete / patch
    const id = currentPost.id;

    await axios.delete(`/api/community`, {
      data: { id },
    });

    setPost((prev) => prev.filter((post) => post.id !== ids.contentId));
    setModal({ ...modal, community: false });
  };

  return (
    <Styled.InnerModalMain>
      {iAmTheOne && (
        <Flex flexDirection='row' justifyContent='flex-end' style={{ position: "relative" }}>
          <button onClick={() => setModal({ ...modal, edit: true, community: false })}>수정</button>
          <button onClick={deletePost}>삭제</button>
        </Flex>
      )}
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        <Flex flexDirection='column' style={{ width: "100%", textAlign: "center" }}>
          <Flex flexDirection='column' style={{ borderBottom: "1px solid lightGray" }}>
            <span style={{ letterSpacing: 5 }}>제목</span>
            <P content={currentPost.title} />
          </Flex>
          <Flex>
            <P content={currentPost.content} style={{ textAlign: "left", lineHeight: 2, letterSpacing: 2 }} />
          </Flex>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
