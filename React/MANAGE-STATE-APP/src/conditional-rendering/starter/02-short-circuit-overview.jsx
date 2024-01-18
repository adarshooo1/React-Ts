import { useState } from "react";

export const Example = () => {
  const [text, useText] = useState("");
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "John Doe" });

  const codeExample = text || "Hello world By Code Example";
  return (
    <>
      <h4>Falsy or : {text || "hello World"}</h4>
      <h4>Falsy and : {text && "Hello world"}</h4>
      <h4>Truthy or : {name || "hello World"}</h4>
      <h4>Truthy or : {name && "hello World"}</h4>
      <h3>{codeExample}</h3>
      
      <h1>-------</h1>
      {/* Here text is falsy which means it will jump to other condition and print the truthy condition */}
      {text || (
        <div>
          Hello World
          <h1>{name}</h1>
        </div>
      )}

      <h1>-------</h1>
      {/* Here text is falsy which means it will ends executing and print nothing */}
      {text && (
        <div>
          Hello World
          <h1>{name}</h1>
        </div>
      )}

      <h1>-------</h1>
      {/* And using ! not operator will make this falsy value to true and this allows to move to other conditions and render it. */}
      {!text && (
        <div>
          Hello World
          <h1>{name}</h1>
        </div>
      )}

      <h1>-------</h1>
      {/* Here name is truthy which means it will pick this render, and will not move to other condition*/}
      {name || (
        <div>
          Hello World
          <h1>{name}</h1>
        </div>
      )}

      <h1>-------</h1>
      {/* Here name is truthy and the statement is also truthy so it will move to other condition and render the end truthy value, of previous state are truthy */}
      {name && (
        <div>
          Hello World
          <h1>{name}</h1>
        </div>
      )}

      <h1>-------</h1>
      {user && <SpareComponent name={user.name} />}
    </>
  );
};

const SpareComponent = ({ name }) => {
  return (
    <div>
      <h2>Whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};
