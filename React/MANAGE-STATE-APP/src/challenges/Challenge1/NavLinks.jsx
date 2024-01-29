import React from "react";
import UserContainer from "./UserContainer";

const NavLinks = () => {
  return (
    <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "40px",
            color: "orangered",
            fontWeight: "500",
            textDecoration: "underline",
          }}
        >
          <li>Home</li>
          <li>Skills</li>
        </ul>
      </div>
      <div>
        <UserContainer />
      </div>
    </div>
  );
};

export default NavLinks;
