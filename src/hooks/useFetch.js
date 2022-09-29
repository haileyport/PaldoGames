import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(initialUrl) {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState([]);

  const fetchData = () => axios.get(url).then(({ data }) => setData(data));

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
}

export default useFetch;
