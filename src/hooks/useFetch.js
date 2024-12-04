import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    }),
    []
  );

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url, options);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
