import { P } from "../../P/P";
import { Flex } from "../../Flex/Flex";
import * as Styled from "./ModalProfile.style";
import { useRecoilValue } from "recoil";
import { contentState } from "../../../../states";
import { ADMIN_INFO } from "../../../../constants";

export const ModalProfile = ({ user }) => {
  const { name, aboutMe, image, email } = user;
  const ids = useRecoilValue(contentState);

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Styled.Section>
        <Flex flexDirection='column' style={{ textAlign: "center" }}>
          {ids.userId === ADMIN_INFO.id ? (
            <Styled.AdminImage type='image' src={image} alt='admin-image' />
          ) : (
            <Styled.Image type='image' src={image} alt='profile-image' />
          )}
          <P content={name} style={{ marginBottom: -5 }} />
          <P content={aboutMe ? aboutMe : email} />
        </Flex>
      </Styled.Section>
    </Flex>
  );
};
