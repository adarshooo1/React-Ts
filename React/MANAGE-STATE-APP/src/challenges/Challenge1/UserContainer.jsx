import React, { useState } from "react";
import { User } from "lucide-react";

const UserContainer = () => {
  const [user, setUser] = useState("Adarsh");
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{ margin: "0 5px", display: "flex", alignItems: "center" }}
        >
          {user && (
            <>
              <User style={{ fontWeight: "700" }} />
              Welcome, Mr./Mrs. {user}
            </>
          )}

          {!user && (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                style={{ border: "none", outline: "none" }}
                onChange={(e) => {
                  setInputValue(e.target.value); // Update state on change
                }}
              />
            </>
          )}
        </span>
      </div>

      {user && (
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#2B2BF7",
            color: "white",
            fontWeight: "500",
            fontSize: "15px",
            borderRadius: "4px",
            padding: "3px 6px",
            margin: "0 10px",
          }}
          onClick={() => {
            setUser(null);
          }}
        >
          Logout
        </button>
      )}

      {!user && (
        <button
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "#2B2BF7",
            color: "white",
            fontWeight: "500",
            fontSize: "15px",
            borderRadius: "4px",
            padding: "3px 6px",
            margin: "0 10px",
          }}
          onClick={() => {
            setUser(inputValue);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserContainer;
