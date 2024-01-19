import { useState } from "react";

export const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);
  //   const [user, setUser] = useState({ name: "Adarsh Logged In" });

  return (
    <>
      <div className="container">
        {toggle && <Alert />}
        <button
          className="bttn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "Disable Toggle" : "Show Toggle"}
        </button>
      </div>
    </>
  );
};

const Alert = () => {
  return (
    <div>
      <h1>Alert Is Visible</h1>
    </div>
  );
};
