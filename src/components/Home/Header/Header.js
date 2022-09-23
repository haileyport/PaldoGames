import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";

import { useRecoilState, useSetRecoilState } from "recoil";
import { currentUserState, modalStates } from "../../../states";

import { HomeLink } from "./HomeLink/HomeLink";
import { Profile } from "./NavProfile";
import { Login } from "./NavLogin";
import * as StyledNav from "./Nav.style";
import * as Styled from "./Header.style";

export const Header = () => {
  const { data: session, status } = useSession();

  const setCurrentUser = useSetRecoilState(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);

  const fetchLoginData = useCallback(async () => {
    const response = await axios.get("/api/user");

    const users = response.data.users;

    if (session) {
      const email = session.user.email;
      const userIndex = users.findIndex((user, i) => user.email === email);

      setModal({ ...modal, login: false });
      setCurrentUser({ user: users[userIndex], isLoggedIn: true });
    }
  }, [modal, session, setCurrentUser, setModal]);

  useEffect(() => {
    fetchLoginData();
  }, [session]);

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
          {status === "unauthenticated" ? <Login /> : status === "authenticated" ? <Profile /> : ""}
        </StyledNav.Nav>
      </Styled.Header>
    </>
  );
};
