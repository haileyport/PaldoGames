import Link from "next/link";
import { MainSection } from "../../Home/Main/Main.style";
import { StyledGamesMain } from "./GamesMain.style";

export const GamesMain = () => {
  return (
    <StyledGamesMain>
      <MainSection>
        <Link href="games/wordrelay">
          <div
            style={{
              width: 300,
              height: 200,
              border: "1px solid white",
              backgroundColor: "white",
            }}
          ></div>
        </Link>
        <Link href="games/baseball">
          <div
            style={{
              width: 300,
              height: 200,
              border: "1px solid white",
              backgroundColor: "green",
            }}
          ></div>
        </Link>
        <Link href='games/baseball'>
          <div style={{ width: 300, height: 200, border: '1px solid white', backgroundColor: 'green' }}></div>
        </Link>
        <Link href='games/tictactoe'>
          <div style={{ width: 300, height: 200, border: '1px solid white', backgroundColor: 'red' }}></div>
        </Link>
      </MainSection>
    </StyledGamesMain>
  );
};
