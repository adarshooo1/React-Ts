import { useState, useEffect } from "react";

const MultipleReturnBasic = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const url = "https://api.github.com/users/QuincyLarson";

  // Async Task
  const fetchData = async () => {
    try {
      const result = await fetch(url);
      console.log(result);
      if (!result.ok) {
        setError(true);
      }
      const useUser = await result.json();
      console.log(useUser);
      // Setting the useUser to the setUser state to render user.
      setUser(useUser);
    } catch (error) {
      setError(true);
      console.log(error);
    }

    // When useUser result fetched and set to the state, simply set the loading state to false. So that we can show the result.
    setIsLoading(false);
  };

  useEffect(() => {
    // We can create asynchronous function outside and call it inside useEffect hook.
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h1>There was an error...</h1>;
  }

  // If we destructure any properties then we must destructure after all the conditions and if we destructure before all the condition then it cannot destructure from null state. Hence make error.
  const { avatar_url, name, location, company, bio } = user;

  return (
    <>
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <img
          style={{
            height: "200px",
            width: "200px",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
          src={avatar_url}
          alt={name}
        />
        <h2 style={{ margin: "10px 0" }}>{name}</h2>
        <h3>location : {location}</h3>
        <h3>Works at : {company}</h3>
        <h3>{bio}</h3>
      </div>
    </>
  );
};

export default MultipleReturnBasic;
