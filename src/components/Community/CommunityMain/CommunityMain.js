import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { Flex, Input, P } from "../../@commons";
import { StyledCommunityMain } from "./Community.style";
import { CommunityContentModal } from "../CommunityContentModal/CommunityContentModal";
import { ContentTitleContainer } from "./ContentTitleContainer/ContentTitleContainer";
import { Pagination } from "../Pagination/Pagination";

import {
  communityModalState,
  COMMUNITY_DUMMY,
  modalState,
} from "../../../states";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { CommunityPostModal } from "../CommunityPostModal/CommunityPostModal";

const mainStyle = {
  position: "absolute",
  width: "100%",
  height: "80vh",
};

export const CommunityMain = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [communityModal, setCommunityModal] =
    useRecoilState(communityModalState);

  const [currentUser, setCurrentUser] = useState(null);

  // 페이지네이션

  const [posts, setPosts] = useState([]);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPosts(COMMUNITY_DUMMY);
  }, []);

  return (
    <StyledCommunityMain style={{ border: "1px solid white" }}>
      {/*  이 부분 따로 컴포넌트로 분리 CommunityHeader */}
      <ContentTitleContainer />

      <Flex flexDirection="column" style={mainStyle}>
        {/* 글을 쓸수 있는 부분 컴포넌트 분리*/}
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          style={{ width: "95%", marginBottom: "10px" }}
        >
          <button onClick={() => console.log("aa")}>글쓰기</button>
          {/* <CommunityPostModal /> */}
        </Flex>

        {/* 글 내용을 불러오는 컴포넌트 */}
        {posts
          .slice(offset, offset + limit)
          .map(({ kakaoId, title, profileUrl }, i) => {
            return (
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                key={i}
                style={{
                  width: "90%",
                  borderBottom: "1px solid white",
                  margin: "0 auto",
                }}
              >
                <Flex>
                  <input type="radio" id={kakaoId} />
                  <P
                    className="ellipsis"
                    content={title}
                    style={{
                      width: "70%",
                      marginLeft: 20,
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={({ target }) => {
                      setCommunityModal(!communityModal);
                      setCurrentUser((prev) => (prev = target.id));
                    }}
                    id={kakaoId}
                  />
                </Flex>
                <Flex alignItems="center" alignSelf="flex-end">
                  {/* 추후에 input image 클릭시에 프로필 팝업 보여지나, id 에 해당하는 프로필이 보여져야 함
                 +  본인이 클릭시에는 본인 프로필 팝업이 보여지고 다른사람이 클릭시에는 다른 팝업 ??  깃헙 링크 만 보여지게??? 
                */}
                  <Input
                    type="image"
                    src={profileUrl}
                    onClick={() => setModal(!modal)}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  />
                  {/* 댓글기능 구현시 주석 제거 */}
                  <FontAwesomeIcon
                    icon={faMessage}
                    style={{ color: "white" }}
                  />
                  <span style={{ marginLeft: 5, color: "white" }}>3</span>
                </Flex>
              </Flex>
            );
          })}
      </Flex>
    </StyledCommunityMain>
  );
};
