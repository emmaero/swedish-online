import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firestore";

export default function useFetch(path: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (path) => {
      //@ts-ignore
      setLoading("loading...");
      try {
        const fetchData = await getCollection(path);
        //@ts-ignore
        setData(fetchData);
        //@ts-ignore
        setLoading(false);
      } catch {
        //@ts-ignore
        setError("An error occurred.");
      }
    },
    []
  );
  useEffect(() => {
    fetchData(path);
  }, [fetchData]);
  return { data, loading, error };
}
