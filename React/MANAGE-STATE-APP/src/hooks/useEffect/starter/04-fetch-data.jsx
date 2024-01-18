import React, { useState, useEffect } from "react";

export const Profile = ({ id, avatar_url, login }) => {
  return (
    <>
      <div className="profileSkeleton" key={id}>
        <div className="githubInfo">
          <img className="githubImage" src={avatar_url} alt={login} />
          <div style={{ marginLeft: "20px" }}>
            <div
              style={{
                fontSize: "25px",
                paddingBottom: "10px",
                fontWeight: "bolder",
              }}
            >
              {login}
            </div>
            <div style={{ color: "blue", fontSize: "20px", fontWeight: "900" }}>
              Profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const GithubUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const fetchedUsers = await response.json();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Fetch Data Example</h1>
        <h2>Github Users</h2>
        {users.map((user) => (
          <Profile key={user.id} {...user} />
        ))}
      </div>
    </>
  );
};
