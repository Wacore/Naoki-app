import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async () => {
    const response = await apiFunc();

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  return { request, data, error };
};
