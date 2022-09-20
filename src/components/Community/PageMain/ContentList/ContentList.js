import { useRecoilState } from "recoil";
import { contentState, modalStates } from "../../../../states";
import { Flex, P, Input } from "../../../@commons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

export const ContentList = ({ details }) => {
  let { id, title, writer } = details;

  const [modal, setModal] = useRecoilState(modalStates);
  const [currentPostId, setCurrentPostId] = useRecoilState(contentState);

  return (
    <Flex flexDirection='row' justifyContent='space-between' style={{ width: "90%", borderBottom: "1px solid white", margin: "0 auto" }}>
      <Flex>
        <input type='radio' id={id} disabled />
        <P
          id={id}
          writer={writer.id}
          className='ellipsis'
          content={title}
          style={{ width: "70%", marginLeft: 20, color: "white", cursor: "pointer", maxWidth: "300px" }}
          onClick={() => {
            setModal({ ...modal, community: true });
            setCurrentPostId({ ...currentPostId, contentId: id, userId: writer.id });
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
        {/* 댓글기능 구현시 주석 제거 */}
        {/* <FontAwesomeIcon icon={faMessage} style={{ color: 'white' }} /> */}
        <span style={{ marginLeft: 5, color: "white" }}>{writer.name}</span>
      </Flex>
    </Flex>
  );
};
