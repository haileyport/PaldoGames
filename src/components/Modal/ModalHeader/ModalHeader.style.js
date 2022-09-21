import styled from 'styled-components';

const StyledModalHeader = styled.header`
  position: relative;
  padding: 16px 64px 16px 16px;
  background-color: #f1f1f1;
  font-weight: 700;
  > button {
    border: none;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    color: #999;
    background-color: transparent;
    cursor: pointer;
  }
`;

export { StyledModalHeader };
