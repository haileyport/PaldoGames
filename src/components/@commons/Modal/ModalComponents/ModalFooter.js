import { signOut } from "next-auth/react";

import * as Styled from "./ModalComponents.style";

export const ModalFooter = () => {
  return (
    <>
      <Styled.Footer>
        <Styled.FooterInner onClick={() => signOut()}>
          ๋ก๊ทธ์์
        </Styled.FooterInner>
      </Styled.Footer>
    </>
  );
};
