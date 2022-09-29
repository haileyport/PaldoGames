import axios from "axios";
import { useEffect, useState } from "react";

function useFetchUserPoint(userId) {
  const [userData, setUserData] = useState(null);

  const fetchUserPoint = () =>
    axios
      .get(`/api/game/${userId}`)
      .then(({ data }) => setUserData(data.response));

  useEffect(() => {
    fetchUserPoint();
  }, [userId]);

  return userData;
}

export default useFetchUserPoint;
