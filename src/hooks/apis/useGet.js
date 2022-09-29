import useAxios from "./useAxios";
import axios from "./useAxiosInstance";

const useGet = (url) => {
  const [data, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url,
  });

  return [data, error, loading];
};

export default useGet;
