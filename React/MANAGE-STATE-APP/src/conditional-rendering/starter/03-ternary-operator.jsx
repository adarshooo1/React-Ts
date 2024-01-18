import { useState } from "react";

export const Example = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Susan");
  const [user, setUser] = useState({ name: "Adarsh" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div>
        <h2>{text || "Default Value"}</h2>
        {text && (
          <div>
            <h2>Whatever Return</h2>
            <h1>{name}</h1>
          </div>
        )}

        {user && <SomeComponent name={user.name} />}
        <h2>Ternary Operator</h2>
        <button>{isEditing ? "edit" : "add"}</button>

        {/* Ternary Operator use in real world */}
        {user ? (
          <SomeComponent name={user.name} />
        ) : (
          <div>
            <h2>Please Login</h2>
            <button>Login</button>
          </div>
        )}
      </div>
    </>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <>
      <h2>You are logged In</h2>
      <h1>{name}</h1>
    </>
  );
};
