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

export const GamesCard = ({ imageUrl, gameTitle, linkUrl }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [modal, setModal] = useRecoilState(modalStates);

  return (
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
      </GamesCardImgWrapper>
      {modal.desc && <CardModal />}
      {isHovering ? (
        <Flex>
          <GameButtons
            content={["게임 시작", "게임 설명"]}
            linkUrl={linkUrl}
            setIsHovering={setIsHovering}
            gameTitle={gameTitle}
          />
        </Flex>
      ) : null}
    </StyledGamesCard>
  );
};
