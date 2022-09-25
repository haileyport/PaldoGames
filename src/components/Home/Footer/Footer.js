import Link from "next/link";
import * as Styled from "./Footer.style";

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Styled.InfoContainer>
          <Link href="/">
            <Styled.TeamName>
              © 2022 CodeStates - ⓒ FE_40기 팔도게임즈
            </Styled.TeamName>
          </Link>
          <Link href="easteregg">
            <Styled.HideButton></Styled.HideButton>
          </Link>
        </Styled.InfoContainer>
      </Styled.Container>
      <Styled.Container></Styled.Container>
    </Styled.Footer>
  );
};
