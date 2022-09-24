import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Flex } from "../../@commons";
import { ContentModal } from "../ContentModal/ContentModal";
import { Pagination } from "../Pagination/Pagination";

import { PostModal } from "../PostModal/PostModal";

import { ContentList } from "./ContentList/ContentList";
import { postState } from "../../../states/community";
import { EditModal } from "../EditModal/EditModal";
import * as Styled from "./Community.style";
import { debounceFunction } from "../../../utils/utils";

export const CommunityMain = ({ postDataObj, userDataObj }) => {
  const postData = postDataObj.response;
  const [modal, setModal] = useRecoilState(modalStates);
  const [post, setPost] = useRecoilState(postState);
  const [searchValue, setSearchValue] = useState("");

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

  useLayoutEffect(() => {
    fetchCommunityData();

    return () => fetchCommunityData();
  }, [fetchCommunityData]);

  const updateSearchValue = debounceFunction((target) => {
    setSearchValue((prev) => (prev = target.value));
  }, 500);

  const onChangeSearchEvent = useCallback(
    ({ target }) => {
      updateSearchValue(target);
    },
    [updateSearchValue]
  );

  const printFilteredPosts = useCallback(() => {
    // indexOf
    post.slice(offset, offset + limit).map((details) => console.log(details.title, searchValue));
    const filteredPost = post.slice(offset, offset + limit).filter((details) => details.title.includes(searchValue));

    if (filteredPost.length === 0 && searchValue) {
      return <Styled.Empty>텅</Styled.Empty>;
    }

    if (filteredPost.length !== 0) {
      return filteredPost.map((details, i) => {
        return <ContentList key={i} details={details} id={details.id} />;
      });
    }
  }, [limit, offset, post, searchValue]);

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
          <Styled.SearchInput type='text' placeholder='   검색어를 입력하세요' onChange={onChangeSearchEvent} />
          <FontAwesomeIcon icon={faSearch} size='1x' style={{ position: "relative", top: 62, right: 30, color: "black", zIndex: 67, cursor: "none" }} />
        </Flex>
      </Styled.Header>
      <Styled.Section>
        <Styled.Main>
          <Flex justifyContent='flex-end' alignItems='center' style={{ width: "95%", marginBottom: "10px" }}>
            <button onClick={() => setModal({ ...modal, post: true })} style={{ position: "relative", top: 40 }}>
              글쓰기
            </button>
            {modal.post && <PostModal />}
          </Flex>
          {printFilteredPosts()}
          {modal.community ? <ContentModal postData={post} /> : modal.edit ? <EditModal /> : null}
          <Styled.Footer>
            <Pagination total={post.length} limit={limit} page={page} setPage={setPage} />
          </Styled.Footer>
        </Styled.Main>
      </Styled.Section>
    </>
  );
};
