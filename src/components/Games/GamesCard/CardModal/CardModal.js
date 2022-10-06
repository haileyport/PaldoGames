import { Modal, ModalHeader } from "../../../@commons/Modal";
import * as Styled from "../../../@commons/Modal/Modal.style";
import { CardModalMain } from "../../../@commons/Modal";
import { useRecoilValue } from "recoil";
import { gameModal } from "../../../../states";

export const CardModal = ({}) => {
  const { game } = useRecoilValue(gameModal);

  return (
    <Modal>
      <Styled.Section
        width='80%'
        maxWidth='600px'
        minWidth='500px'
        style={{
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        <ModalHeader content={`${game} 게임설명`} />
        <CardModalMain />
      </Styled.Section>
    </Modal>
  );
};
