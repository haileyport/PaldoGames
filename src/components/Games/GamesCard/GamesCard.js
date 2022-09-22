import {
  GamesCardImgWrapper,
  GamesCardTitle,
  StyledGamesCard,
} from "./GamesCard.style";
import Image from "next/image";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";
import { GameButtons } from "./GameButtons";
import { Flex } from "../../@commons";
import { CardModal } from "./CardModal/CardModal";

export const GamesCard = ({ imageUrl, gameTitle, linkUrl, desc }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    // <Link href={linkUrl}>
    <StyledGamesCard>
      <GamesCardImgWrapper
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={imageUrl}
          width="100%"
          height="60%"
          layout="responsive"
          quality={100}
        />
        {modal.desc && <CardModal desc={desc} />}
      </GamesCardImgWrapper>
      {isHovering ? (
        <Flex>
          <GameButtons
            content={["게임 시작", "게임 설명"]}
            linkUrl={linkUrl}
            setIsHovering={setIsHovering}
          />
        </Flex>
      ) : null}
      <GamesCardTitle>{gameTitle}</GamesCardTitle>
    </StyledGamesCard>
    // </Link>
  );
};
