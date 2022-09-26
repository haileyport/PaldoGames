import styled from "styled-components";

export const StyledMain = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const MainSection = styled.div`
  width: 100%;
  display: flex;
  padding: 0rem 1.25rem 6rem 1.25rem;
  flex-direction: column;
  align-items: center;
  margin-left: 7rem;
  margin-right: 7rem;
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
