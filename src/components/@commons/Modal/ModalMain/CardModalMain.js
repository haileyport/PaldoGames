import { Flex } from "../../Flex/Flex";
import * as Styled from "./ModalMain.style";
import { GAME_LIST } from "../../../../constants";
import { useRecoilValue } from "recoil";
import { gameModal } from "../../../../states";

export const CardModalMain = ({}) => {
  const { game } = useRecoilValue(gameModal);

  return (
    <Styled.InnerModalMain>
      <Flex justifyContent="center">
        {GAME_LIST.map((el, i) => {
          if (game === el.gameTitle)
            return (
              <div
                key={i}
                style={{ whiteSpace: "pre-line", textAlign: "center" }}
              >
                {el.desc}
              </div>
            );
        })}
      </Flex>
    </Styled.InnerModalMain>
  );
};
