import { useRef } from 'react';

import { useSetRecoilState } from 'recoil';
import { modalState } from '../../states';

import { StyledModal } from './Modal.style';

export const Modal = ({ children }) => {
  const backGroundRef = useRef();
  const setModal = useSetRecoilState(modalState);

  const onClickBackground = ({ target }) => (target === backGroundRef.current ? setModal(false) : null);

  return (
    <StyledModal ref={backGroundRef} onClick={onClickBackground}>
      {children}
    </StyledModal>
  );
};
