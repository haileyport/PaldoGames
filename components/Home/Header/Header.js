import Link from 'next/link';

import { HomeLink } from './HomeLink/HomeLink';
import { Profile } from './NavProfile';
import StyledHeader from './Header.style';
import { StyledNav, NavContent } from './Nav.style';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Link href='/'>
          <HomeLink />
        </Link>
        <StyledNav>
          <Link href='#'>
            <NavContent>홈</NavContent>
          </Link>
          <Link href='#'>
            <NavContent>게임</NavContent>
          </Link>
          {/* 추가되는 NAV 링크들은 이 아래쪽으로 추가해주시면 됩니다. */}
          <Link href='#'>
            <NavContent>예시</NavContent>
          </Link>
          <Link href='#'>
            <Profile></Profile>
          </Link>
        </StyledNav>
      </StyledHeader>
    </>
  );
};
