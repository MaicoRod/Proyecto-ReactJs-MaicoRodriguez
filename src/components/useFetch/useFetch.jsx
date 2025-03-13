import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]); // Cambiado de null a []
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cancelar la petición si el componente se desmonta
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
