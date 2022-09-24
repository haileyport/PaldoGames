import { Modal, ModalHeader } from "../../../@commons/Modal";
import * as Styled from "../../../@commons/Modal/Modal.style";
import { CardModalMain } from "../../../@commons/Modal";
import { GAME_LIST } from "../../../../constants";

export const CardModal = ({}) => {
  return (
    <Modal>
      <Styled.Section
        width="80%"
        maxWidth="800px"
        minWidth="500px"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <ModalHeader content="게임설명" />
        <CardModalMain />
      </Styled.Section>
    </Modal>
  );
};
