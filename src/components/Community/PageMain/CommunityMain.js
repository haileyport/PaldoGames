import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalStates } from "../../../states";

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
import { HeroButton } from "../../Home/Hero/Hero.style";

export const CommunityMain = ({ postList }) => {
  const [modal, setModal] = useRecoilState(modalStates);
  const [post, setPost] = useRecoilState(postState);
  const [searchValue, setSearchValue] = useState("");

  // 페이지네이션
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const filteredPost = post.filter((details) => details.title.includes(searchValue));

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

  useEffect(() => {
    setPost((prev) => (prev = postList));
  }, [postList, setPost]);

  const handleFilteredPost = useCallback(() => {
    // 검색어를 포함한 제목이 없을경우
    if (filteredPost.length === 0 && searchValue) {
      return <Styled.Empty>텅</Styled.Empty>;
    }

    // 검색어를 포함한 제목이 있을경우
    if (filteredPost.length !== 0 && searchValue) {
      return filteredPost.slice(offset, offset + limit).map((details, i) => {
        return <ContentList key={i} details={details} id={details.id} />;
      });
    }

    // Default behavior
    return post.slice(offset, offset + limit).map((details, i) => {
      return <ContentList key={i} details={details} id={details.id} />;
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
          <Styled.SearchInput type='text' placeholder='   검색어를 입력하세요' onChange={onChangeSearchEvent} />
          <FontAwesomeIcon icon={faSearch} size='1x' style={{ position: "relative", top: 63, right: 330, color: "black", zIndex: 67, cursor: "none" }} />
        </Flex>
      </Styled.Header>
      <Styled.Section>
        <Styled.Main>
          {handleFilteredPost()}
          {modal.community ? <ContentModal postData={post} /> : modal.edit ? <EditModal /> : null}
          <Styled.Footer>
            <Pagination total={filteredPost.length} limit={limit} page={page} setPage={setPage} />
          </Styled.Footer>
          <Flex justifyContent='flex-end' alignItems='center' style={{ width: "95%", marginBottom: "10px" }}>
            <HeroButton
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
            </HeroButton>
            {modal.post && <PostModal />}
          </Flex>
        </Styled.Main>
      </Styled.Section>
    </>
  );
};
