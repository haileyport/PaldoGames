import styled from "styled-components";

export const HomeLink = styled.p`
  display: flex;
  font-weight: 500;
  align-items: center;
  color: rgb(100 116 139);
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  &:hover {
    cursor: pointer;
    color: rgb(255 255 255);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const Logo = styled.span`
  margin-top: 1.5px;
`;

export const Name = styled.a`
  margin-left: 0.2rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-right: 1rem;
`;
