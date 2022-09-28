import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  adminState,
  contentState,
  currentUserState,
  modalStates,
} from "../../../states";
import axios from "axios";

import { Flex } from "../../@commons";
import { ContentModal } from "../ContentModal/ContentModal";
import { Pagination } from "../Pagination/Pagination";
import { PostModal } from "../PostModal/PostModal";
import { ContentList } from "./ContentList/ContentList";
import { EditModal } from "../EditModal/EditModal";
import * as Styled from "./Community.style";

import { postState } from "../../../states/community";
import { debounceFunction } from "../../../utils/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ADMIN_INFO, COMMUNITY_ADMINS } from "../../../constants";
import { AdminPostModal } from "../PostModal/AdminPostModal";
import { ContentListProfile } from "./ContentList/ContentListProfile";

export const CommunityMain = ({ postList }) => {
  const { user } = useRecoilValue(currentUserState);
  const [modal, setModal] = useRecoilState(modalStates);
  const [post, setPost] = useRecoilState(postState);
  const [searchValue, setSearchValue] = useState("");
  const [isAdmin, setIsAdmin] = useRecoilState(adminState);

  // 페이지네이션
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const filteredPost = post.filter((post) => post.title.includes(searchValue) && post.editor !== ADMIN_INFO.id);

  // 검색기능
  const updateSearchValue = debounceFunction((target) => {
    setSearchValue((prev) => (prev = target.value));
  }, 500);

  const onChangeSearchEvent = useCallback(
    ({ target }) => {
      updateSearchValue(target);
    },
    [updateSearchValue]
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
    <>
      <Styled.Header>
        <Flex flexDirection='row' justifyContent='space-around'>
          <Link href='/community'>
            <Styled.P>커뮤니티</Styled.P>
          </Link>
          <Link href='/ranking'>
            <Styled.P>랭킹</Styled.P>
          </Link>
        </Flex>
        <Flex flexDirection='row' justifyContent='center'>
          <Styled.SearchContainer>
            <Styled.SearchInput type='text' placeholder='   검색어를 입력하세요' onChange={onChangeSearchEvent} />
            <FontAwesomeIcon
              icon={faSearch}
              size='1x'
              style={{
                position: "relative",
                top: 52,
                right: 330,
                color: "black",
                zIndex: 67,
                cursor: "none",
              }}
            />
          </Styled.SearchContainer>
        </Flex>
      </Styled.Header>
      <Styled.Section>
        <Styled.Main>
          {getAdminPost()}
          {handleFilteredPost()}
          {modal.community ? <ContentModal postData={post} /> : modal.edit ? <EditModal /> : null}
          <Styled.Footer>
            <Pagination total={filteredPost.length} limit={limit} page={page} setPage={setPage} />
          </Styled.Footer>
          <Flex justifyContent='flex-end' alignItems='center' style={{ width: "95%", marginBottom: "10px" }}>
            <Styled.Button
              onClick={() => setModal({ ...modal, post: true })}
              style={{
                position: "relative",
                top: 50,
                fontSize: 15,
                letterSpacing: "none",
                textAlign: "center",
              }}
            >
              글쓰기
            </Styled.Button>
            {isAdmin && (
              <Styled.Button
                onClick={() => setModal({ ...modal, admin: true })}
                style={{
                  position: "relative",
                  top: 50,
                  fontSize: 15,
                  letterSpacing: "none",
                  textAlign: "center",
                }}
              >
                공지
              </Styled.Button>
            )}
          </Flex>
          {modal.post && <PostModal />}
          {modal.admin && isAdmin ? <AdminPostModal /> : null}
          {modal.editor && <ContentListProfile />}
        </Styled.Main>
      </Styled.Section>
    </>
  );
};
