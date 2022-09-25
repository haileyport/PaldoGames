import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
  background: none;
`;

export const Button = styled.nav`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: none;
  color: white;
  font-size: 1rem;
  background: none;

  &:hover {
    background: #d0756f;
    transform: translateY(-2px);
    cursor: pointer;
  }
  &[disabled] {
    opacity: 30%;
    cursor: revert;
    transform: revert;
    pointer-events: none;
  }

  &[aria-current] {
    transform: revert;
    cursor: pointer;
  }
`;
