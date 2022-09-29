import axios from "axios";
import { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useGet } from "../../../../hooks";
import {
  adminState,
  contentState,
  currentUserState,
  modalStates,
} from "../../../../states";
import { postState } from "../../../../states/community";
import { Flex } from "../../Flex/Flex";
import { P } from "../../P/P";
import * as Styled from "./ModalMain.style";

export const CommunityModalMain = () => {
  const { user } = useRecoilValue(currentUserState);
  const [selectedUserData] = useGet(`/game/${user.id}`);
  const [communityData] = useGet("/community");
  const [isDisabled, setIsDisabled] = useState(false);
  const ids = useRecoilValue(contentState);
  const [post, setPost] = useRecoilState(postState);
  const [modal, setModal] = useRecoilState(modalStates);
  const isAdmin = useRecoilValue(adminState);

  const getPost = post.filter(
    ({ writer, title }) => writer.id === ids.userId && title === ids.title
  )[0];
  const index = post.findIndex((details) => details.id === getPost.id);
  const iAmTheOne = user.id === getPost?.writer.id;

  const renderPost = useCallback(() => {
    const deleted = [...post.slice(0, index), ...post.slice(index + 1)];

    setPost(deleted);
    setModal({ ...modal, community: false });

    // eslint-disable-next-line
  }, [index, post, setPost]);

  const deletePost = (id, point) => {
    axios
      .delete(`/api/community`, {
        data: { id },
      })
      .then(() => {
        renderPost();
      })
      .catch((err) => {
        console.log(err);
      });

    point > 100 &&
      axios.patch(`api/game`, { userId: user.id, point: point - 100 });
  };

  const handleDeletePost = useCallback(() => {
    if (isDisabled) return;

    const point = selectedUserData.response.totalPoint;
    const postList = communityData.response;

    const currentPost = postList.filter(
      (post) => post.editor === ids.userId && ids.title === post.title
    )[0];

    deletePost(currentPost.id, point);
    setIsDisabled(true);

    // eslint-disable-next-line
  }, [communityData, isDisabled, selectedUserData]);

  return (
    <Styled.InnerModalMain>
      {(iAmTheOne || isAdmin) && (
        <Flex
          flexDirection='row'
          justifyContent='flex-end'
          style={{ position: "relative" }}
        >
          <button
            onClick={() => setModal({ ...modal, edit: true, community: false })}
          >
            수정
          </button>
          <button onClick={() => handleDeletePost()} disabled={isDisabled}>
            삭제
          </button>
        </Flex>
      )}
      <Flex
        justifyContent='space-between'
        style={{ margin: 40, marginTop: 20 }}
      >
        <Flex
          flexDirection='column'
          style={{ width: "100%", textAlign: "center" }}
        >
          <Flex
            flexDirection='column'
            style={{ borderBottom: "1px solid lightGray" }}
          >
            <span style={{ letterSpacing: 5 }}>제목</span>
            <P className='contentTitle' content={getPost?.title} />
          </Flex>
          <Flex>
            <P
              content={getPost?.content}
              style={{ textAlign: "left", lineHeight: 2, letterSpacing: 2 }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Styled.InnerModalMain>
  );
};
