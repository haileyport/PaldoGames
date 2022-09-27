import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { adminState, contentState, currentUserState, modalStates } from "../../../../states";
import { postState } from "../../../../states/community";
import { Flex } from "../../Flex/Flex";
import { P } from "../../P/P";
import * as Styled from "./ModalMain.style";

export const CommunityModalMain = () => {
  const [totalPoint, setTotalPoint] = useState({ id: "", point: 0 });
  const ids = useRecoilValue(contentState);
  const [post, setPost] = useRecoilState(postState);
  const { user } = useRecoilValue(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);
  const isAdmin = useRecoilValue(adminState);

  const getPost = post.filter(({ writer, title }) => writer.id === ids.userId && title === ids.title)[0];
  const index = post.findIndex((details) => details.id === getPost.id);
  const iAmTheOne = user.id === getPost?.writer.id;

  const fetchTotalPoint = useCallback(async () => {
    const { data } = await axios.get(`/api/game/${user.id}`);
    let point;

    if (data.response) {
      point = data.response.totalPoint;
      setTotalPoint({ id: user.id, point });
    } else {
      point = 0;
    }
  }, [user.id]);

  const deletePost = useCallback(async () => {
    const { data } = await axios.get("/api/community");
    const response = data.response;
    const { point } = totalPoint;

    const currentPost = response.filter((post) => post.editor === ids.userId && ids.title === post.title)[0];

    await axios
      .delete(`/api/community`, {
        data: { id: currentPost.id },
      })
      .then((res) => {
        if (res.status === 200) {
          updatePost();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (point > 100) {
      await axios.patch(`api/game`, { userId: user.id, point: point - 100 });
    }
  }, [ids.title, ids.userId, totalPoint, updatePost, user.id]);

  const updatePost = useCallback(() => {
    const _post = [...post];

    _post.splice(index, 1);

    setPost((prev) => (prev = _post));
    setModal({ ...modal, community: false });
  }, [index, post, setModal, setPost]);

  useEffect(() => {
    fetchTotalPoint();
  }, [fetchTotalPoint]);

  return (
    <Styled.InnerModalMain>
      {(iAmTheOne || isAdmin) && (
        <Flex flexDirection='row' justifyContent='flex-end' style={{ position: "relative" }}>
          <button onClick={() => setModal({ ...modal, edit: true, community: false })}>수정</button>
          <button onClick={() => deletePost()}>삭제</button>
        </Flex>
      )}
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        <Flex flexDirection='column' style={{ width: "100%", textAlign: "center" }}>
          <Flex flexDirection='column' style={{ borderBottom: "1px solid lightGray" }}>
            <span style={{ letterSpacing: 5 }}>제목</span>
            <P className='contentTitle' content={getPost?.title} />
          </Flex>
          <Flex>
            <P content={getPost?.content} style={{ textAlign: "left", lineHeight: 2, letterSpacing: 2 }} />
          </Flex>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
