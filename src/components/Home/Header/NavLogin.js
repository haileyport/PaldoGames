import { signIn } from "next-auth/react";

import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";

import { Flex } from "../../@commons";
import { Modal, ModalHeader } from "../../@commons/Modal";
import * as Styled from "../../@commons/Modal/Modal.style";
import * as StyledNav from "./Nav.style";
import GithubButton from "react-github-login-button";

export const Login = () => {
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    <Flex flexDirection='column'>
      <StyledNav.Content onClick={() => setModal({ ...modal, login: true })}>로그인</StyledNav.Content>
      <div>
        {modal.login && (
          <Flex>
            <Modal>
              <Styled.Section width='20%' maxWidth='350px' minWidth='300px' left='40%'>
                <ModalHeader content='로그인' />
                <Flex flexDirection='column'>
                  <GithubButton
                    label='깃허브 로그인'
                    onClick={() => signIn("github")}
                    style={{ position: "relative", cursor: "pointer", width: "90%", margin: 15 }}
                  />
                </Flex>
              </Styled.Section>
            </Modal>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
