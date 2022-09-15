import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.nav`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: none;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[aria-current] {
    cursor: revert;
    transform: revert;
  }
`;

export { Nav, Button };
