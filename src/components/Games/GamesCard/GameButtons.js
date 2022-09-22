import { GameBtn, GameBtnRound, GameBtnText } from "./GamesCard.style";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states/modal";

export const GameButtons = ({ content, linkUrl, setIsHovering }) => {
  const [modal, setModal] = useRecoilState(modalStates);
  return (
    <>
      <Link href={linkUrl}>
        <GameBtn
          top="40%"
          left="38%"
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
        left="63%"
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setModal({ ...modal, desc: true })}
      >
        <GameBtnRound color="blue" hover="#1617B7">
          <GameBtnText>{content[1]}</GameBtnText>
        </GameBtnRound>
      </GameBtn>
    </>
  );
};
