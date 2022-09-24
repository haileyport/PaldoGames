import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

export const Content = styled.a`
  color: rgb(100 116 139);
  font-weight: 600;
  margin-left: 1.25rem;
  &:hover {
    color: rgb(255 255 255);
    cursor: pointer;
  }
`;

export const Profile = styled.input`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  margin-left: 1.25rem;
`;
