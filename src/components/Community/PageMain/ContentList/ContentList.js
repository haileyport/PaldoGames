import { useRecoilState, useRecoilValue } from "recoil";
import { contentState, modalStates, postState } from "../../../../states";
import { Flex, Input } from "../../../@commons";
import * as Styled from "../Community.style";

export const ContentList = ({ post }) => {
  const { title, writer } = post;
  const postList = useRecoilValue(postState);
  const [currentPostId, setCurrentPostId] = useRecoilState(contentState);
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      style={{
        width: "90%",
        borderBottom: "1px solid white",
        margin: "0 auto",
      }}
    >
      <Flex style={{ width: 550 }}>
        <input type="radio" disabled style={{ width: "auto" }} />
        <Styled.Title
          writer={writer.id}
          className="ellipsis"
          onClick={() => {
            const currentPost = postList.filter(
              (post) => post.title === title && post.editor === writer.id
            )[0];

            setModal({ ...modal, community: true });
            setCurrentPostId({
              contentId: currentPost?.id,
              userId: currentPost?.editor,
              title: currentPost?.title,
            });
          }}
        >
          {title}
        </Styled.Title>
      </Flex>
      <Flex alignItems="center" alignSelf="flex-end">
        <Input
          type="image"
          id={writer.id}
          src={writer.image}
          onClick={({ target }) => {
            setModal({ ...modal, editor: true });
            setCurrentPostId({ ...currentPostId, editorId: target.id });
          }}
          style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }}
        />
        <Styled.NameSpan length={writer.name.length}>
          {writer.name}
        </Styled.NameSpan>
      </Flex>
    </Flex>
  );
};
