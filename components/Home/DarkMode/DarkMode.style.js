import styled from 'styled-components';

const DarkModeButton = styled.button`
  display: inline-flex;
  align-items: center;
  border-width: 0px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 1rem;
  :focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  @media screen and (min-width: 738px) {
    margin-top: 0px;
  }
`;

export { DarkModeButton };
