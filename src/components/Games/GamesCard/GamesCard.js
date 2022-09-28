import { GamesCardImgWrapper, StyledGamesCard } from "./GamesCard.style";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";
import { GameButtons } from "./GameButtons";

export const GamesCard = ({ imageUrl, gameTitle, linkUrl }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <StyledGamesCard>
      <GamesCardImgWrapper
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image src={imageUrl} layout="responsive" quality={100} />
      </GamesCardImgWrapper>
      {isHovering ? (
        <GameButtons
          content={["게임시작", "게임설명"]}
          linkUrl={linkUrl}
          setIsHovering={setIsHovering}
          gameTitle={gameTitle}
        />
      ) : null}
    </StyledGamesCard>
  );
};
