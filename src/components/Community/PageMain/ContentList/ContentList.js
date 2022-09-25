import { useRecoilState } from "recoil";
import { contentState, modalStates, postState } from "../../../../states";
import { Flex, P, Input } from "../../../@commons";

export const ContentList = ({ details }) => {
  const { title, writer } = details;
  const [modal, setModal] = useRecoilState(modalStates);
  const [postList, setPost] = useRecoilState(postState);
  const [currentPostId, setCurrentPostId] = useRecoilState(contentState);

  return (
    <Flex
      flexDirection='row'
      justifyContent='space-between'
      style={{ width: "90%", position: "relative", top: "40px", borderBottom: "1px solid white", margin: "0 auto" }}
    >
      <Flex>
        <input type='radio' disabled />
        <P
          writer={writer.id}
          className='ellipsis'
          content={title}
          style={{ fontSize: 17, fontWeight: 300, width: "70%", marginLeft: 20, color: "white", cursor: "pointer", minWidth: 245, maxWidth: 245 }}
          onClick={() => {
            const currentPost = postList.filter((post) => post.title === title && post.editor === writer.id)[0];

            setModal({ ...modal, community: true });
            setCurrentPostId({ contentId: currentPost?.id, userId: currentPost?.editor, editorId: currentPost?.title });
          }}
        />
      </Flex>
      <Flex alignItems='center' alignSelf='flex-end'>
        <Input
          id={writer.id}
          type='image'
          src={writer.image}
          onClick={({ target }) => {
            setModal({ ...modal, editor: true });
            setCurrentPostId({ ...currentPostId, editorId: target.id });
          }}
          style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }}
        />

        <span style={{ marginLeft: 5, color: "white" }}>{writer.name}</span>
      </Flex>
    </Flex>
  );
};
