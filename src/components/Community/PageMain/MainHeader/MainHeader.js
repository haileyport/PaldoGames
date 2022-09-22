import Link from "next/link";
import styled from "styled-components";
import { Flex } from "../../../@commons";
import * as Styled from "./MainHeader.style";

export const MainHeader = () => {
  return (
    <Flex
      flexDirection='row'
      justifyContent='space-around'
      style={{
        flex: 1,
        width: "100%",
        height: "10vh",
      }}
    >
      <Link href='/community'>
        <Styled.P>커뮤니티</Styled.P>
      </Link>
      <Link href='/ranking'>
        <Styled.P>랭킹</Styled.P>
      </Link>
    </Flex>
  );
};
