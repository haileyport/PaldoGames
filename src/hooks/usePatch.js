import axios from "axios";
import { useEffect } from "react";

function usePatch(url, data, update) {
  useEffect(() => {
    axios.patch(url, data).then((res) => update(res));
  }, [data, update, url]);
}

export default usePatch;
