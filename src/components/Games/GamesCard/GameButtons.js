import { GameBtn, GameBtnRound, GameBtnText } from "./GamesCard.style";
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
          left="36%"
          onMouseOver={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <GameBtnRound color="red" hover="#B80009">
            <GameBtnText>{content[0]}</GameBtnText>
          </GameBtnRound>
        </GameBtn>
      </Link>
      <GameBtn
        top="40%"
        left="65%"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onClick={() => {
          setModal({ ...modal, desc: true });
          setCurrentGame({ game: gameTitle });
        }}
      >
        <GameBtnRound color="blue" hover="#1617B7">
          <GameBtnText>{content[1]}</GameBtnText>
        </GameBtnRound>
      </GameBtn>
    </>
  );
};
