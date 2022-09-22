import { Modal, ModalFooter, ModalHeader } from "../../@commons/Modal";
import * as Styled from "../../@commons/Modal/Modal.style";
// import { CardModalMain } from "../../@commons/Modal";

export const GameCardModal = ({ gameTitle, desc }) => {
  const handleGameModalMain = () => {
    if (gameTitle) {
      return;
    }
  };

  return (
    <Modal>
      <Styled.Section
        width="80%"
        maxWidth="1000px"
        minWidth="500px"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        <ModalHeader content="게임설명" />
        {/* <CardModalMain desc={desc} /> */}
        <ModalFooter />
      </Styled.Section>
    </Modal>
  );
};
