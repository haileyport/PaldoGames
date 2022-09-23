import { signIn } from "next-auth/react";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";

import { Flex } from "../../@commons";
import { Modal, ModalHeader } from "../../@commons/Modal";
import * as Styled from "../../@commons/Modal/Modal.style";
import * as StyledNav from "./Nav.style";
import kakao from "../../../../public/kakao_login_medium_wide.png";

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
                  <Image src={kakao} alt='깃허브 로그인' onClick={() => signIn("github")} style={{ cursor: "pointer" }} />
                </Flex>
              </Styled.Section>
            </Modal>
          </Flex>
        )}
      </div>
    </Flex>
  );
};
