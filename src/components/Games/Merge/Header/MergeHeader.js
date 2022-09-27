import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import { currentUserState } from "./../../../../states/user";
import { useRecoilValue } from "recoil";

const MergeHeader = ({ reset, setReset }) => {
  const router = useRouter();
  const { user } = useRecoilValue(currentUserState);

  const getUser = async () => {
    const userId = user.id;
    const res = await axios
      .get(`/api/game/${userId}`)
      .catch((err) => console.log(err));
    return res.data.response.totalPoint;
  };

  const handleReset = async () => {
    const point = getUser();
    if (point >= 100) {
      setReset((reset) => !reset);
    } else {
      alert("포인트가 부족합니다!");
      router.push("/");
    }
  };

  return (
    <HeaderWrap>
      <TitleWrap>
        <span className="title">2048</span>
        <span className="subTitle">
          🕹️ 새 게임을 시작하면 포인트가 100점 차감됩니다.
        </span>
      </TitleWrap>
      <Heading>
        <Button onClick={handleReset}>New Game</Button>
      </Heading>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  color: white;
  min-height: 8rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: 650px;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 1rem;
`;

const TitleWrap = styled.h1`
  font-weight: bold;
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  white-space: nowrap;
  & .title {
    font-size: 4rem;
  }
  .subTitle {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const Button = styled.button`
  display: inline-flex;
  color: rgb(255 255 255);
  margin: 0 1rem;
  background-color: rgb(99 102 241);
  border-width: 0px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.75rem;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  &:hover {
    background-color: rgb(79 70 229);
    cursor: pointer;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export default MergeHeader;
