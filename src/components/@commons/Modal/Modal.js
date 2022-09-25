import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { modalStates } from "../../../states";

import * as Styled from "./Modal.style";

export const Modal = ({ children }) => {
  const setModal = useSetRecoilState(modalStates);

  const backgroundRef = useRef(null);

  const handleModals = () =>
    setModal({
      login: false,
      profile: false,
      community: false,
      post: false,
      easteregg: false,
    });

  const onClickBackground = ({ target }) =>
    target === backgroundRef.current && handleModals();

  // 모달창 팝업시 배경 스크롤 제한
  useEffect(() => {
    let scrollY = document.body.style.top;

    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Styled.Container ref={backgroundRef} onClick={onClickBackground}>
      {children}
    </Styled.Container>
  );
};

Modal.displayName = "Modal";
