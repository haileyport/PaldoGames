import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { communityModalState, modalState } from '../../states';
import { StyledCommunityMain } from '../Community/CommunityMain/Community.style';

import { StyledModal } from './Modal.style';

export const Modal = (props) => {
  const { children } = props;

  const setModal = useSetRecoilState(modalState);
  const setCommunityModal = useSetRecoilState(communityModalState);
  const backgroundRef = useRef(null);

  const onClickBackground = ({ target }) => target === backgroundRef.current && (setModal(false), setCommunityModal(false));

  return (
    <StyledModal ref={backgroundRef} onClick={onClickBackground}>
      {children}
    </StyledModal>
  );
};

Modal.displayName = 'Modal';
