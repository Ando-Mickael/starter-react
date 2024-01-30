import { useEffect, useState } from "react";

export default function useFetch(url, options = {}) {
  const [result, setResult] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((responseData) => {
        setResult({
          data: responseData,
          isLoading: false,
          error: null,
        });
      })
      .catch((error) => {
        setResult({
          data: null,
          isLoading: false,
          error,
        });
      });
  }, []);

  return result;
}
