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

  const getPostList = post.filter((details) => details?.writer?.id === ids?.userId && details?.id === ids?.contentId)[0];

  const iAmTheOne = user.id === getPostList?.writer.id;

  const deletePost = async () => {
    const { data } = await axios.get("/api/community");
    const response = data.response;
    const currentPost = response.filter((post) => post.editor === ids.userId && getPostList.title === post.title)[0];

    await axios.delete(`/api/community`, {
      data: { id: currentPost.id },
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
            <P content={getPostList?.title} />
          </Flex>
          <Flex>
            <P content={getPostList?.content} style={{ textAlign: "left", lineHeight: 2, letterSpacing: 2 }} />
          </Flex>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
