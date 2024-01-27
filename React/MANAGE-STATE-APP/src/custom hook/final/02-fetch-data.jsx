import useFetchPerson from "./useFetchPerson";

export const FetchData = () => {
  const url = "https://api.github.com/users/QuincyLarson";

  //   Destructure order is not matter.
  const { error, waiting, user } = useFetchPerson(url);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (waiting) {
    return <h1>Loading...</h1>;
  }

  console.log(user);
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
