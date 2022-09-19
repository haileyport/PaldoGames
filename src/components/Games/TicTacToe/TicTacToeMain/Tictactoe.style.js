import styled from 'styled-components';

const Main = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 100px;
  width: 100%;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  color: rgb(75 85 99);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 1px solid red;
`;

<<<<<<< HEAD:src/components/Community/CommunityMain/Community.style.js
const GamesSection = styled.div`
  width: 100%;
  display: grid;
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


export { StyledCommunityMain, GamesSection, GamesTitle };
=======
export { Main };
>>>>>>> 036b41182300d3a5fed536bc12c8ae6258c57481:src/components/Games/TicTacToe/TicTacToeMain/Tictactoe.style.js
