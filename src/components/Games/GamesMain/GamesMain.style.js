import styled from "styled-components";

const StyledGamesMain = styled.section`
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

const GamesSection = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 80em) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-top: 10px;
  padding: 13px;
  grid-gap: 5%;
`;

const GamesTitle = styled.h1`
  color: white;
  margin-left: 1.2em;
  @media screen and (max-width: 80em) {
    font-size: 1.7em;
  }
  text-align: center;
`;

export { StyledGamesMain, GamesSection, GamesTitle };
