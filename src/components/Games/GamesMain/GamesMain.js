import { MainSection } from "../../Home/Main/Main.style";
import { GamesCard } from "../GamesCard/GamesCard";
import { GamesSection, GamesTitle, StyledGamesMain } from "./GamesMain.style";
import baseball from "../../../../public/baseball.png";

const gameList = [
  {
    gameTitle: "구구단",
    imageUrl: baseball,
    linkUrl: "/games/timestables",
    desc: "구구단 게임 입니다.",
  },
  {
    gameTitle: "숫자야구",
    imageUrl: baseball,
    linkUrl: "/games/baseball",
    desc: "숫자야구 게임 입니다.",
  },
  {
    gameTitle: "2048",
    imageUrl: baseball,
    linkUrl: "/games/merge",
    desc: "2048 게임 입니다.",
  },
  {
    gameTitle: "로또",
    imageUrl: baseball,
    linkUrl: "/games/lotto",
    desc: "로또 입니다.",
  },
];

export const GamesMain = () => {
  return (
    <>
      <GamesTitle>팔도게임즈의 미니게임을 즐겨 보세요!</GamesTitle>
      <StyledGamesMain>
        <GamesSection>
          {gameList.map(({ gameTitle, imageUrl, linkUrl, desc }, i) => {
            return (
              <GamesCard
                key={i}
                gameTitle={gameTitle}
                imageUrl={imageUrl}
                linkUrl={linkUrl}
              />
            );
          })}
        </GamesSection>
        <MainSection />
      </StyledGamesMain>
    </>
  );
};
