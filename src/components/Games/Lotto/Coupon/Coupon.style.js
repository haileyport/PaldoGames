import styled from "styled-components";

const CouponBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
  margin: 20px auto;
  width: 40rem;
  max-width: 500px;
  height: 50rem;
  padding: 15px;
  margin-top: 4rem;
  background-color: rgb(255 255 255);
  border: 2px solid rgb(255 44 30);
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgb(255 44 30), 0 0 0px 10px rgb(0, 0, 0);

  > .selected {
    background-color: black;
    color: rgb(255, 255, 255);
  }
  @media screen and (max-width: 520px) {
    margin-top: 10rem;
    display: none;
  }
  @media screen and (min-width: 640px) {
    margin-top: 10rem;
    width: 39rem;
    height: 49rem;
  }
  @media screen and (min-width: 2303px) {
    margin-top: 10rem;
    width: 40rem;
    height: 50rem;
  }
  @media screen and (max-height: 1028px) {
    width: 35rem;
    height: 45rem;
  }
  @media screen and (max-height: 920px) {
    height: 40rem;
  }
  @media screen and (max-height: 840px) {
    width: 32rem;
    height: 42rem;
  }

  @media screen and (max-height: 810px) {
    width: 28rem;
    height: 38rem;
  }
  @media screen and (max-height: 760px) {
    width: 25rem;
    height: 35rem;
  }
  @media screen and (max-height: 730px) {
    width: 23rem;
    height: 33rem;
  }
  @media screen and (max-height: 705px) {
    width: 20rem;
    height: 30rem;
  }
  @media screen and (max-height: 666px) {
    width: 18rem;
    height: 28rem;
  }
  @media screen and (max-height: 640px) {
    width: 15rem;
    height: 25rem;
  }
  @media screen and (max-height: 860px) {
    display: none;
  }
`;

export { CouponBox };
