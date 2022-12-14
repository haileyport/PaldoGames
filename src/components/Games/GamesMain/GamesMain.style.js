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
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 20px;
  }
  margin-right: 5%;
  padding: 13px;
  grid-gap: 5%;
`;

const GamesTitle = styled.h1`
  color: white;
  margin-top: 5rem;
  @media screen and (max-width: 40em) {
    font-size: 1.5em;
    margin-top: 2rem;
  }
`;

export { StyledGamesMain, GamesSection, GamesTitle };
