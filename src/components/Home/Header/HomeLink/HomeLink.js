import Image from "next/image";
import Logo from "../../../../../public/logo.png";
import Link from "next/link";
import * as Styled from "./HomeLink.style";

export const HomeLink = () => {
  return (
    <Styled.HomeLink>
      <Styled.Logo>
        <Image src={Logo} alt='로고' width={25} height={22}></Image>
      </Styled.Logo>
      <Link href='/'>
        <Styled.Name>팔도게임즈</Styled.Name>
      </Link>
    </Styled.HomeLink>
  );
};
