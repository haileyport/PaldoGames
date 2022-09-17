import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { communityModalState, modalState, modalStates, postModalState } from '../../states';

import { StyledModal } from './Modal.style';

export const Modal = ({ children }) => {
  // const setModal = useSetRecoilState(modalState);
  // const setCommunityModal = useSetRecoilState(communityModalState);
  // const setPostModal = useSetRecoilState(postModalState);

  const setModal = useSetRecoilState(modalStates);

  const backgroundRef = useRef(null);

  const handleModals = () => {
    // 백그라운드 클릭시 모달창 꺼짐
    setModal({ login: false, profile: false, community: false, post: false });
  };

  const onClickBackground = ({ target }) => target === backgroundRef.current && handleModals();

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
