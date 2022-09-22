import { P } from "../../P/P";
import { Flex } from "../../Flex/Flex";
import * as Styled from "./ModalProfile.style";

export const ModalProfile = ({ user }) => {
  const { name, aboutMe, image } = user;

  return (
    <Flex flexDirection='column' alignItems='center'>
      <Styled.Section>
        <Styled.Image type='image' src={image} alt='profile-image' />
        <Flex flexDirection='column' style={{ textAlign: "center" }}>
          <P content={name} style={{ marginBottom: -5 }} />
          <P content={aboutMe} />
        </Flex>
      </Styled.Section>
    </Flex>
  );
};