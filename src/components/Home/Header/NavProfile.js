import { useSession } from "next-auth/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalStates, currentUserState } from "../../../states";

import { Flex } from "../../@commons";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ProfileModalMain,
  ModalProfile,
} from "../../@commons/Modal";
import * as Styled from "../../@commons/Modal/Modal.style";
import * as StyledNav from "./Nav.style";

export const Profile = () => {
  const { data: session } = useSession();
  const [modal, setModal] = useRecoilState(modalStates);
  const { user } = useRecoilValue(currentUserState);

  return (
    <Flex flexDirection="column">
      <StyledNav.Profile
        type="image"
        src={session?.user.image}
        onClick={() => setModal({ ...modal, profile: true })}
      />
      <div>
        {modal.profile && (
          <Flex>
            <Modal>
              <Styled.Section
                width="40%"
                maxWidth="350px"
                minWidth="300px"
                left="40%"
              >
                <ModalHeader content="프로필" />
                <ModalProfile user={current} />
                <ProfileModalMain user={current} />
                <ModalFooter />
              </Styled.Section>
            </Modal>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
