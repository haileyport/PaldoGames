import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { currentUserState, modalStates } from "../../../states";

import { HomeLink } from "./HomeLink/HomeLink";
import { Profile } from "./NavProfile";
import { Login } from "./NavLogin";
import * as StyledNav from "./Nav.style";
import * as Styled from "./Header.style";
import { useGet } from "../../../hooks";

export const Header = () => {
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);

  const [selectedUserData, error, loading] = useGet(`/user`);

  const getUserData = useCallback(() => {
    if (!loading && !error) {
      const users = selectedUserData.users;

      if (session) {
        const email = session.user.email;
        const userIndex = users.findIndex((user, i) => user.email === email);

        setModal({ ...modal, login: false });
        setCurrentUser({
          ...currentUser,
          user: users[userIndex],
          isLoggedIn: true,
        });
      }
    }

    // eslint-disable-next-line
  }, [selectedUserData]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

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
          <Link href='/community'>
            <StyledNav.Content>커뮤니티</StyledNav.Content>
          </Link>
          {status === "unauthenticated" ? <Login /> : <Profile />}
        </StyledNav.Nav>
      </Styled.Header>
    </>
  );
};
