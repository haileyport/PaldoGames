import { useSetRecoilState } from "recoil";
import { modalStates } from "../../../../states";
import * as Styled from "./ModalComponents.style";

export const ModalHeader = ({ content }) => {
  const setModal = useSetRecoilState(modalStates);

  const onClickCloseModal = () =>
    setModal({ login: false, profile: false, community: false, post: false });

  return (
    <Styled.Header className='modal-header'>
      <div>{content}</div>
      <button onClick={onClickCloseModal}>&times;</button>
    </Styled.Header>
  );
};
