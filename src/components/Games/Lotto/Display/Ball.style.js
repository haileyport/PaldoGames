import styled, { keyframes } from "styled-components";

const BallFade = keyframes`

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  /* 100% {
    transform: translateX(0);
  } */
`;

const BallDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 250%;
  width: 4rem;
  height: 4rem;
  color: rgb(255, 255, 255);
  border: 2px solid rgb(255 255 255);
  background-color: rgb(99 102 241);
  margin: auto;
  border-radius: 50%;
  font-size: 30px;
  transition: background-color 2s;
  /* transform: translateY(-50vh); */
  animation: ${BallFade} 2s both;

  /* &:nth-of-type(1) {
    animation-delay: 0.8s;
  }
  &:nth-of-type(2) {
    animation-delay: 1s;
  }
  &:nth-of-type(3) {
    animation-delay: 1.2s;
  }
  &:nth-of-type(4) {
    animation-delay: 1.4s;
  }
  &:nth-of-type(5) {
    animation-delay: 1.6s;
  }
  &:nth-of-type(6) {
    animation-delay: 1.8s;
  } */
`;

export { BallDiv, BallFade };
