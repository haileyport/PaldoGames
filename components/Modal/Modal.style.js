import styled from 'styled-components';

export const StyledModal = styled.div`
  width :100%;
  height : 100%;
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

  > section {
    position : relative;
    width: 40%;
    max-width: 300px;
    min-width: 250px;
    /* 모달 위치 조정 */
    left : 79rem;
    bottom : 13.5rem;
    border-radius: 0.3rem;
    background-color: #fff;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.3s;
    overflow: hidden;

    /* 반응형 모달 팝업 구현 필요 */

    
    > header {
      position: relative;
      padding: 16px 64px 16px 16px;
      background-color: #f1f1f1;
      font-weight: 700;

      > button {
        border : none;
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        color: #999;
        background-color: transparent;
        cursor : pointer;
      }
    }

    > main {
      padding: 16px;
      border-bottom: 1px solid #dee2e6;
      border-top: 1px solid #dee2e6;
    }

    > footer {
      padding: 12px 16px;
      text-align: right;
    }

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
