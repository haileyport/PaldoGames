import { useRecoilState } from "recoil";
import { modalStates } from "../../../../states";
import { Flex } from "../../../@commons";
import * as Styled from "./Content.style";

export const ContentFooter = ({ isAdmin }) => {
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      style={{
        width: "95%",
        marginBottom: "10px",
      }}
    >
      <Styled.Button onClick={() => setModal({ ...modal, post: true })}>
        글쓰기
      </Styled.Button>
      {isAdmin && (
        <Styled.Button onClick={() => setModal({ ...modal, admin: true })}>
          공지
        </Styled.Button>
      )}
    </Flex>
  );
};
