import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';

import { HomeLink } from './HomeLink/HomeLink';
import { Profile } from './NavProfile';
import StyledHeader from './Header.style';
import { StyledNav, NavContent } from './Nav.style';
import { currentUserState, modalStates } from '../../../states';

export const Header = () => {
  let { isLoggedIn } = useRecoilValue(currentUserState);

  isLoggedIn = true;
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    <>
      <StyledHeader>
        <HomeLink />
        <StyledNav>
          <Link href='/'>
            <NavContent>홈</NavContent>
          </Link>
          <Link href='/games'>
            <NavContent>게임</NavContent>
          </Link>
          {/* 추가되는 NAV 링크들은 이 아래쪽으로 추가해주시면 됩니다. */}
          <Link href='/community'>
            <NavContent>커뮤니티</NavContent>
          </Link>
          {!isLoggedIn ? <NavContent onClick={() => setModal({ ...modal, login: true })}>로그인</NavContent> : <Profile></Profile>}
        </StyledNav>
      </StyledHeader>
    </>
  );
};
