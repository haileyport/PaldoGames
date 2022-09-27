import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get(url).then((res) => setData(res.data));
    }

    fetchData();
  }, [url]);

  return data;
}

export default useFetch;
