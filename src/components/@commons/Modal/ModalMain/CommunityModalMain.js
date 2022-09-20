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

  const currentPost = post.filter((details) => details.writer.id === ids.userId && details.id === ids.contentId);
  const iAmTheOne = user.id === currentPost[0].writer.id;

  const deletePost = async () => {
    // 추후에 정말 삭제할건지 물어보기
    const id = currentPost[0].writer.id;

    await axios.delete(`/api/community`, {
      data: { id },
    });
    console.log("deleted");

    setModal({ ...modal, community: false });
  };

  return (
    <Styled.InnerModalMain>
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        {currentPost.map(({ title, content }, i) => {
          return (
            <Flex flexDirection='column' key={i} style={{ width: "100%", textAlign: "center" }}>
              {iAmTheOne && (
                <button onClick={deletePost} style={{ width: "80px", position: "relative", left: "95%", borderRadius: "8px" }}>
                  삭제
                </button>
              )}
              <Flex flexDirection='column' style={{ borderBottom: "1px solid lightGray" }}>
                <span style={{ letterSpacing: 5 }}>제목</span>
                <P content={title} />
              </Flex>
              <Flex>
                <P content={content} style={{ textAlign: "left", lineHeight: 2, letterSpacing: 2 }} />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Styled.InnerModalMain>
  );
};
