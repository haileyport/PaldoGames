import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../public/logo.png";
// import DarkModeToggleButton from "./dark-mode";

export default function Header() {
  return (
    <>
      <Head>
        <NavLeft>
          <Link href="/">
            <Homelink>
              <LogoBox>
                <Image src={Logo} alt="로고" width={25} height={22}></Image>
              </LogoBox>
              <Name>팔도게임즈</Name>
            </Homelink>
          </Link>

          <Nav>
            <Link href="/">
              <Nav_contents>홈</Nav_contents>
            </Link>

            <Link href="/game">
              <Nav_contents>게임</Nav_contents>
            </Link>

            <Link href="/profile">
              <Nav_contents>프로필</Nav_contents>
            </Link>
          </Nav>
        </NavLeft>
      </Head>
    </>
  );
}
{
  /* <DarkModeToggleButton /> */
}

const Head = styled.header`
  background-color: #1e293b;
  color: rgb(75 85 99);
`;

const NavLeft = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 640px) {
    max-width: 640px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
    flex-direction: row;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
  @media screen and (min-width: 1536px) {
    max-width: 1536px;
  }
`;

const Homelink = styled.a`
  display: flex;
  font-weight: 500;
  align-items: center;
  color: rgb(100 116 139);
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
  &:hover {
    cursor: pointer;
    color: rgb(255 255 255);
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Name = styled.span`
  margin-left: 0.2rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-right: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5rem;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;

const Nav_contents = styled.a`
  color: rgb(100 116 139);
  font-weight: 600;
  margin-left: 1.25rem;
  &:hover {
    color: rgb(255 255 255);
    cursor: pointer;
  }
`;

const LogoBox = styled.span`
  margin-top: 1.5px;
`;
