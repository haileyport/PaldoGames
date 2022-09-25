import styled from "styled-components";

export const StyledGamesMain = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const GamesSection = styled.div`
  width: 80%;
  display: grid;
  margin-top: 10px;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GamesTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 1.2em;
  padding-top: 50px;
  @media screen and (max-width: 40em) {
    font-size: 1.8em;
  }
`;
