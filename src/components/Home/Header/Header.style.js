import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: #1e293b;
  color: rgb(75 85 99);
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 640px) {
    max-width: 640px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

export default StyledHeader;
