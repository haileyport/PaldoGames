import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { modalState } from '../../states';
import { StyledModal } from './Modal.style';

export const Modal = (props) => {
  const { children } = props;
  const setModal = useSetRecoilState(modalState);

  const onClickBackground = ({ target }) => (target === backGroundRef.current ? setModal(false) : null);

  return <StyledModal>{children}</StyledModal>;
};

Modal.displayName = 'Modal';
