import { GamesCardImgWrapper, GamesCardTitle, StyledGamesCard, GameStartBtn, GameInfoBtn } from "./GamesCard.style";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const GamesCard = ({ imageUrl, gameTitle, linkUrl }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={linkUrl}>
      <StyledGamesCard>
        <GamesCardImgWrapper onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <Image src={imageUrl} width='100%' height='60%' layout='responsive' quality={100} />
          {isHovering ? (
            <>
              <GameStartBtn>게임 시작</GameStartBtn>
              <GameInfoBtn>게임 설명</GameInfoBtn>
            </>
          ) : null}
        </GamesCardImgWrapper>
        <GamesCardTitle>{gameTitle}</GamesCardTitle>
      </StyledGamesCard>
    </Link>
  );
};
