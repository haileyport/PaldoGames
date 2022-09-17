import styled from 'styled-components';

const StyledGamesMain = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const GamesSection = styled.div`
  width: 100%;
  display: grid;
  /* position: relative;
  bottom: 100px; */
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-top: 10px;
  padding: 20px;
  grid-gap:10px;
`;

const GamesTitle = styled.h1`
color: white;
margin-left: 1.2em;
`


export { StyledGamesMain, GamesSection, GamesTitle };
