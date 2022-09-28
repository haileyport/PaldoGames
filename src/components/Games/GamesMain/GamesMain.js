import { MainSection } from "../../Home/Main/Main.style";
import { GamesCard } from "../GamesCard/GamesCard";
import { GamesSection, GamesTitle, StyledGamesMain } from "./GamesMain.style";
import { GAME_LIST } from "../../../constants/index.js";
import { Flex } from "../../@commons";

export const GamesMain = () => {
  return (
    <>
      <Flex justifyContent='center' alignItems='center'>
        <GamesTitle>팔도게임즈의 미니게임을 즐겨 보세요!</GamesTitle>
      </Flex>
      <StyledGamesMain>
        <Flex justifyContent='center' alignItems='center'>
          <GamesSection>
            {GAME_LIST.map(({ gameTitle, imageUrl, linkUrl }) => {
              return <GamesCard key={gameTitle} gameTitle={gameTitle} imageUrl={imageUrl} linkUrl={linkUrl} />;
            })}
          </GamesSection>
        </Flex>
        <MainSection />
      </StyledGamesMain>
    </>
  );
};
