import { useSetRecoilState } from 'recoil';
import { communityModalState, modalState } from '../../../states';
import { StyledModalHeader } from './ModalHeader.style';

export const ModalHeader = ({ content }) => {
  const setModal = useSetRecoilState(modalState);
  const setCommunityModal = useSetRecoilState(communityModalState);

  const onClickCloseModal = () => (setModal(false), setCommunityModal(false));

  return (
    <StyledModalHeader>
      <div>{content}</div>
      <button onClick={onClickCloseModal}>&times;</button>
    </StyledModalHeader>
  );
};
