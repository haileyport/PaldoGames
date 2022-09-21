import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState, modalStates } from "../../../states";
import axios from "axios";

import { Flex } from "../../@commons";
import { ContentModal } from "../ContentModal/ContentModal";
import { Pagination } from "../Pagination/Pagination";

import { PostModal } from "../PostModal/PostModal";
import { MainHeader } from "./MainHeader/MainHeader";

import { ContentList } from "./ContentList/ContentList";
import { postState } from "../../../states/community";
import { EditModal } from "../EditModal/EditModal";
import * as Styled from "./Community.style";

export const CommunityMain = () => {
  const [modal, setModal] = useRecoilState(modalStates);
  const [post, setPost] = useRecoilState(postState);
  const { isLoggedIn } = useRecoilValue(currentUserState);
  const router = useRouter();

  const handleVisitWithoutLoggingIn = () => {
    const currentRoute = router.route;

    if (!isLoggedIn && currentRoute === "/community") {
      router.push("/");
      setModal({ ...modal, login: true });
    }
  };

  // 페이지네이션
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fetchCommunityData = useCallback(async () => {
    const postArray = [];

    const { data } = await axios.get("/api/community");
    const postData = data.response;

    const usersData = await axios.get("/api/user").then((res) => res.data);
    const { users } = usersData;

    postData.map((data) => {
      const { id, title, content, editor } = data;

      users.map((user) => {
        if (user.id === editor) {
          postArray.push({ id, title, content, editor, writer: user });
        }
      });
    });

    setPost((prev) => (prev = postArray));
  }, [post]);

  useEffect(() => {
    fetchCommunityData();
    handleVisitWithoutLoggingIn();

    return () => fetchCommunityData();
  }, []);

  return (
    <Styled.Section>
      <MainHeader />
      <Styled.Main>
        <Flex justifyContent='flex-end' alignItems='center' style={{ width: "95%", marginBottom: "10px" }}>
          <button onClick={() => setModal({ ...modal, post: true })}>글쓰기</button>
          {modal.post && <PostModal />}
        </Flex>

        {post.slice(offset, offset + limit).map((details, i) => {
          return <ContentList key={i} details={details} id={details.id} />;
        })}

        {modal.community ? <ContentModal users={post} /> : modal.edit ? <EditModal /> : null}
        <Styled.Footer>
          <Pagination total={post.length} limit={limit} page={page} setPage={setPage} />
        </Styled.Footer>
      </Styled.Main>
    </Styled.Section>
  );
};
