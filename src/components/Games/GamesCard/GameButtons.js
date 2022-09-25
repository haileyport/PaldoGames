import { GameBtn, GameBtnText } from "./GamesCard.style";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states/modal";
import { gameModal } from "../../../states";

export const GameButtons = ({ content, linkUrl, setIsHovering, gameTitle }) => {
  const [modal, setModal] = useRecoilState(modalStates);
  const [currentGame, setCurrentGame] = useRecoilState(gameModal);

  return (
    <>
      <Link href={linkUrl}>
        <GameBtn
          top="40%"
          left="50%"
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <GameBtnText>{content[0]}</GameBtnText>
        </GameBtn>
      </Link>
      <GameBtn
        top="60%"
        left="50%"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onClick={() => {
          setModal({ ...modal, desc: true });
          setCurrentGame({ game: gameTitle });
        }}
      >
        <GameBtnText>{content[1]}</GameBtnText>
      </GameBtn>
    </>
  );
};
