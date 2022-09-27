import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { MainHeader } from "../PageMain/MainHeader/MainHeader";
import * as ranking from "./Ranking.style";

const RankingMain = () => {
  const [user, setUser] = useState("");
  const [filterArr, setFilterArr] = useState([]);

  const arr = [];
  const newArr = [];

  const getUser = async () => {
    const res = await axios.get("/api/user").catch((err) => console.log(err));
    setUser((prev) => res.data.users);
    return res?.data?.users;
  };

  const getPoint = async (id) => {
    const userId = id;
    const res = await axios
      .get(`/api/game/${userId}`)
      .catch((err) => console.log(err));
    return res?.data?.response?.totalPoint;
  };

  //네임 뿌리기(네임)
  useEffect(() => {
    getUser().then((res) => {
      res.forEach((el) => {
        const userInfo = { id: el.id, email: el.email, name: el.name };
        arr.push(userInfo);
      });
      for (let i = 0; i < arr.length; i++) {
        getPoint(arr[i]?.id).then((point) => {
          if (arr[i]) {
            newArr.push({ ...arr[i], point });
          }
          const filter = newArr.filter((el) => el.point >= 0);
          filter.sort((a, b) => {
            if (a.point < b.point) return 1;
            if (a.point > b.point) return -1;
            return 0;
          });
          setFilterArr(filter);
        });
      }
    });
  }, []);

  return (
    <ranking.BackColor>
      <MainHeader />
      <ranking.RankingSubTitle>
        자신의 랭킹을 확인해보세요!!
      </ranking.RankingSubTitle>

      <ranking.MiddleBox>
        <ranking.RankingBox>
          <thead>
            <tr>
              <th>순위</th>
              <th>닉네임</th>
              <th>포인트</th>
            </tr>
          </thead>
          {filterArr.map((el, i) => {
            while (i < 10) {
              return (
                <tbody key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.point}</td>
                  </tr>
                </tbody>
              );
            }
          })}
        </ranking.RankingBox>
      </ranking.MiddleBox>
    </ranking.BackColor>
  );
};

export default RankingMain;
