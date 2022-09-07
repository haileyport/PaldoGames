import { StyledHomeLink, Name, LogoBox } from './HomeLink.style';
import Image from 'next/image';
import Logo from '../../../../public/logo.png';
import Link from 'next/link';

export const HomeLink = () => {
  return (
    <StyledHomeLink>
      <LogoBox>
        <Image src={Logo} alt='로고' width={25} height={22}></Image>
      </LogoBox>
      <Link href='/'>
        <Name>팔도게임즈</Name>
      </Link>
    </StyledHomeLink>
  );
};
