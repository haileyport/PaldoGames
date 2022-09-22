import { Flex } from "../../Flex/Flex";
import * as Styled from "./ModalMain.style";

export const CardModalMain = ({ desc }) => {
  return (
    <Styled.InnerModalMain>
      <Flex>
        <div>{desc}</div>
      </Flex>
    </Styled.InnerModalMain>
  );
};
