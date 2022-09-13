import styled from 'styled-components';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  animation: modal-bg-show 0.3s;
  cursor: auto;

  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledModalSection = styled.section`
  position: fixed;
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  /* 모달 위치 조정 */
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  border-radius: 0.3rem;
  background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
  animation: modal-show 0.3s;
  overflow: hidden;
  /* 반응형 모달 팝업 구현 필요 */
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 30%;
    left: 30%;
  }
`;

export { StyledModal, StyledModalSection };
