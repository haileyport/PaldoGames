import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <Link href="/">
          <PaldoLink>
            <PaldoTitle>팔도게임즈</PaldoTitle>
          </PaldoLink>
        </Link>
        <CodeStates>
          © 2022 CodeStates — <FE>@FE_40</FE>
        </CodeStates>
        qweqweqw
      </FooterContainer>
    </footer>
  );
}

const FooterContainer = styled.div`
  padding: 1.5rem 1.25rem 1.5rem 1.25rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 640px) {
    max-width: 640px;
    flex-direction: row;
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

const PaldoLink = styled.a`
  display: flex;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  color: rgb(17 24 93);
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const PaldoTitle = styled.span`
  color: rgb(148 163 184);
  margin-left: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  &:hover {
    color: rgb(17 24 39);
    cursor: pointer;
  }
`;

const CodeStates = styled.p`
  color: rgb(148 163 184);
  margin-top: 1rem;
  @media screen and (min-width: 640px) {
    margin-left: 1.5rem;
  }
`;

const FE = styled.a`
  margin-left: 0.25rem;
`;
