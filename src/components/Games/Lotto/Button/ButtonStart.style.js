import styled from "styled-components";

const StartButtonOn = styled.button`
  display: inline-flex;
  color: rgb(255 255 255);
  background-color: rgb(99 102 241);
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
  @media screen and (max-height: 606px) {
    display: none;
  }
`;

const StartButtonOff = styled.button`
  display: inline-flex;
  color: rgb(99 102 241);
  background-color: rgb(99 102 241);
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }
  @media screen and (max-width: 520px) {
    display: none;
  }
  @media screen and (max-height: 606px) {
    display: none;
  }
`;

export { StartButtonOff, StartButtonOn };
