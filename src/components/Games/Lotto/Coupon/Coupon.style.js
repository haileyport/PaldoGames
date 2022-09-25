import styled from "styled-components";

const CouponBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: space-around;
  margin: 20px auto;
  width: 35rem;
  max-width: 500px;
  height: 50rem;
  padding: 15px;
  margin-top: 10rem;
  background-color: rgb(255 255 255);
  border: 2px solid rgb(255 44 30);
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgb(255 44 30), 0 0 0px 10px rgb(0, 0, 0);

  > .selected {
    background-color: black;
    color: rgb(255, 255, 255);
  }
`;

export { CouponBox };
