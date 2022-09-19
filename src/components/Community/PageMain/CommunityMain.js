import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { Flex } from "../../@commons";
import { ContentModal } from "../ContentModal/ContentModal";
import { Pagination } from "../Pagination/Pagination";

import { modalStates } from "../../../states";

import { PostModal } from "../PostModal/PostModal";
import { MainHeader } from "./MainHeader/MainHeader";

import * as Styled from "./Community.style";
import { ContentList } from "./ContentList/ContentList";
import { postData } from "../../../states/dummydata";

export const CommunityMain = () => {
  const [modal, setModal] = useRecoilState(modalStates);

  // 페이지네이션
  const [posts, setPosts] = useRecoilState(postData);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <Styled.Section style={{ border: "1px solid white" }}>
      <MainHeader />
      <Styled.Main>
        <Flex justifyContent='flex-end' alignItems='center' style={{ width: "95%", marginBottom: "10px" }}>
          <button onClick={() => setModal({ ...modal, post: true })}>글쓰기</button>
          {modal.post && <PostModal />}
        </Flex>

        {posts.slice(offset, offset + limit).map((details, i) => {
          return <ContentList key={i} details={details} id={details.id} />;
        })}

        {modal.community && <ContentModal users={posts} />}
        <Styled.Footer>
          <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
        </Styled.Footer>
      </Styled.Main>
    </Styled.Section>
  );
};
