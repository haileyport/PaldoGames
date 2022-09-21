import Link from "next/link";
import * as Styled from "./Footer.style";

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Container>
        <Link href='/'>
          <Styled.InfoContainer>
            <Styled.TeamName>팔도게임즈</Styled.TeamName>
          </Styled.InfoContainer>
        </Link>
        <Styled.Container>
          © 2022 CodeStates — <Styled.A>@FE_40기 팔도게임즈</Styled.A>
        </Styled.Container>
      </Styled.Container>
    </Styled.Footer>
  );
};
