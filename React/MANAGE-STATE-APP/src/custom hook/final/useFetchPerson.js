import { useEffect, useState } from "react";

const useFetchPerson = (url) => {
  const [user, setUser] = useState(null);
  const [waiting, setWaiting] = useState(true);
  const [error, setError] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setError(true);
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      setError(true);
    }

    setWaiting(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, waiting, error };
};

export default useFetchPerson;
