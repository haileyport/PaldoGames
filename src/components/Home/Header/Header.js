import Link from "next/link";
import { useRecoilValue } from "recoil";

import { HomeLink } from "./HomeLink/HomeLink";
import { Profile } from "./NavProfile";
import { Login } from "./NavLogin";
import * as StyledNav from "./Nav.style";
import { currentUserState } from "../../../states";

import * as Styled from "./Header.style";

export const Header = () => {
  const { isLoggedIn } = useRecoilValue(currentUserState);

  return (
    <>
      <Styled.Header>
        <HomeLink />
        <StyledNav.Nav>
          <Link href='/'>
            <StyledNav.Content>홈</StyledNav.Content>
          </Link>
          <Link href='/games'>
            <StyledNav.Content>게임</StyledNav.Content>
          </Link>
          {/* 추가되는 NAV 링크들은 이 아래쪽으로 추가해주시면 됩니다. */}
          <Link href='/community'>
            <StyledNav.Content>커뮤니티</StyledNav.Content>
          </Link>
          {!isLoggedIn ? <Login /> : <Profile />}
        </StyledNav.Nav>
      </Styled.Header>
    </>
  );
};
