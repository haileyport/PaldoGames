import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { communityModalState, modalState } from '../../states';

import { StyledModal } from './Modal.style';

export const Modal = (props) => {
  const { children } = props;

  const setModal = useSetRecoilState(modalState);
  const setCommunityModal = useSetRecoilState(communityModalState);
  const backgroundRef = useRef(null);

  const onClickBackground = ({ target }) => target === backgroundRef.current && (setModal(false), setCommunityModal(false));

  // 모달창 팝업시 배경 스크롤 제한
  useEffect(() => {
    let scrollY = document.body.style.top;

    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <StyledModal ref={backgroundRef} onClick={onClickBackground}>
      {children}
    </StyledModal>
  );
};

Modal.displayName = 'Modal';
