import Link from 'next/link';
import StyledHeader from './Header.style';
import { HomeLink } from './HomeLink/HomeLink';
import { StyledNav, NavContent } from './Nav.style';

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <Link href='/'>
          <HomeLink />
        </Link>
        <StyledNav>
          <Link href='/'>
            <NavContent>홈</NavContent>
          </Link>
          <Link href='/'>
            <NavContent>게임</NavContent>
          </Link>
          <Link href='/'>
            <NavContent>프로필</NavContent>
          </Link>
        </StyledNav>
      </StyledHeader>
    </>
  );
};
