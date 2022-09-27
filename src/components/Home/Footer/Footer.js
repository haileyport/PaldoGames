import Link from 'next/link';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterInfoContainer,
  StyledFooterTeamName,
  StyledFooterCopyright,
  StyledFooterCopyRightATag,
} from './Footer.style';

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Link href='/'>
          <StyledFooterInfoContainer>
            <StyledFooterTeamName>팔도게임즈</StyledFooterTeamName>
          </StyledFooterInfoContainer>
        </Link>
        <StyledFooterCopyright>
          © 2022 CodeStates — <StyledFooterCopyRightATag>@FE_40기 팔도게임즈</StyledFooterCopyRightATag>
        </StyledFooterCopyright>
      </StyledFooterContainer>
    </StyledFooter>
  );
};
