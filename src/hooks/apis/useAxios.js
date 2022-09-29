import { useEffect, useState } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  // 데이터 페칭을 다시하고 싶을때 return 배열에 추가시켜준다.
  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    // 메모리 누수 방지
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });

        setResponse(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        // 에러 메시지가 있거나 성공 메시지가 잇을때 로딩 상태 변경
        setLoading(false);
      }
    };
    fetchData();

    // 컴포넌트가 unMount 될때
    return () => controller.abort();

    // eslint-disable-next-line
  }, [reload]);

  return [response, error, loading, refetch];
};

export default useAxios;
