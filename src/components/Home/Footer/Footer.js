import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states/modal";
import * as Styled from "./Footer.style";

export const Footer = () => {
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.InfoContainer>
          <Link href='/'>
            <Styled.TeamName>
              © 2022 CodeStates - ⓒ FE_40기 팔도게임즈
            </Styled.TeamName>
          </Link>
          <Link href='/easteregg'>
            <Styled.HideButton
              onClick={() => setModal({ ...modal, easterEgg: true })}
            ></Styled.HideButton>
          </Link>
        </Styled.InfoContainer>
      </Styled.Container>
    </Styled.Footer>
  );
};
