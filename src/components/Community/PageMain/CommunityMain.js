import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";

import { Flex } from "../../@commons";
import { ContentModal } from "../ContentModal/ContentModal";
import { Pagination } from "../Pagination/Pagination";

import { PostModal } from "../PostModal/PostModal";
import { MainHeader } from "./MainHeader/MainHeader";

import { ContentList } from "./ContentList/ContentList";
import { postState } from "../../../states/community";
import { EditModal } from "../EditModal/EditModal";
import * as Styled from "./Community.style";

export const CommunityMain = ({ postDataObj, userDataObj }) => {
  const postData = postDataObj.response;
  const [modal, setModal] = useRecoilState(modalStates);
  const [post, setPost] = useRecoilState(postState);

  // 페이지네이션
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fetchCommunityData = useCallback(async () => {
    const postArray = [];
    const { users } = userDataObj;

    postData.map((data) => {
      const { id, title, content, editor } = data;

      // user 값을 넣어주기 위해
      users.map((user) => {
        if (user.id === editor) {
          postArray.unshift({ id, title, content, editor, writer: user });
        }
      });
    });

    setPost((prev) => (prev = postArray));
  }, [postData, setPost, userDataObj]);

  useEffect(() => {
    fetchCommunityData();

    return () => fetchCommunityData();
  }, [fetchCommunityData]);

  return (
    <Styled.Section>
      <MainHeader />
      <Styled.Main>
        <Flex justifyContent='flex-end' alignItems='center' style={{ width: "95%", marginBottom: "10px" }}>
          <button onClick={() => setModal({ ...modal, post: true })} style={{ position: "relative", top: 40 }}>
            글쓰기
          </button>
          {modal.post && <PostModal />}
        </Flex>

        {post.slice(offset, offset + limit).map((details, i) => {
          return <ContentList key={i} details={details} id={details.id} />;
        })}

        {modal.community ? <ContentModal postData={post} /> : modal.edit ? <EditModal /> : null}
        <Styled.Footer>
          <Pagination total={post.length} limit={limit} page={page} setPage={setPage} />
        </Styled.Footer>
      </Styled.Main>
    </Styled.Section>
  );
};
