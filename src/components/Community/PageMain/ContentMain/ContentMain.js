import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  adminState,
  currentUserState,
  modalStates,
  postState,
} from "../../../../states";

import { ContentModal } from "../../ContentModal/ContentModal";
import { Pagination } from "../../Pagination/Pagination";
import { PostModal } from "../../PostModal/PostModal";
import { ContentList } from "../ContentList/ContentList";
import { EditModal } from "../../EditModal/EditModal";

import * as Styled from "./Content.style";

import { ADMIN_INFO, COMMUNITY_ADMINS } from "../../../../constants";

import { AdminPostModal } from "../../PostModal/AdminPostModal";
import { ContentListProfile } from "../ContentList/ContentListProfile";
import { ContentHeader } from "./ContentHeader";
import { ContentFooter } from "./ContentFooter";

export const CommunityMain = ({ postList }) => {
  const { user } = useRecoilValue(currentUserState);
  const modal = useRecoilValue(modalStates);
  const [post, setPost] = useRecoilState(postState);
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);
  const [searchValue, setSearchValue] = useState("");

  // 페이지네이션
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const filteredPost = post.filter(
    (post) => post.title.includes(searchValue) && post.editor !== ADMIN_INFO.id
  );

  const validateAdmin = useCallback(() => {
    COMMUNITY_ADMINS.map((el) => el.id === user.id && setIsAdmin(true));
  }, [setIsAdmin, user.id]);

  useEffect(() => {
    setPost((prev) => (prev = postList));
    validateAdmin();
  }, [postList, setPost, validateAdmin]);

  const getAdminPost = useCallback(() => {
    return post.map((post, i) => {
      if (post.editor === ADMIN_INFO.id) {
        return <ContentList key={i} post={post} id={post.id} />;
      }
    });
  }, [post]);

  const handleFilteredPost = useCallback(() => {
    // 검색어를 포함한 제목이 없을경우
    if (filteredPost.length === 0 && searchValue) {
      return <Styled.Empty>텅</Styled.Empty>;
    }

    // 검색어를 포함한 제목이 있을경우
    if (filteredPost.length !== 0 && searchValue) {
      return filteredPost.slice(offset, offset + limit).map((post, i) => {
        return <ContentList key={i} post={post} id={post.id} />;
      });
    }

    // Default behavior
    return post.slice(offset, offset + limit).map((post, i) => {
      if (post.editor !== ADMIN_INFO.id) {
        return <ContentList key={i} post={post} id={post.id} />;
      }
    });
  }, [filteredPost, limit, offset, post, searchValue]);

  return (
    <Styled.Section>
      <ContentHeader setSearchValue={setSearchValue} />
      <Styled.Main>
        {getAdminPost()}
        {handleFilteredPost()}
      </Styled.Main>
      <ContentFooter isAdmin={isAdmin} />
      <Pagination
        total={filteredPost.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
      {modal.community && <ContentModal postData={post} />}
      {modal.edit && <EditModal />}
      {modal.post && <PostModal />}
      {modal.admin && isAdmin ? <AdminPostModal /> : null}
      {modal.editor && <ContentListProfile />}
    </Styled.Section>
  );
};
