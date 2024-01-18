import React, { useState } from "react";

export const Starter = () => {
  const [value, setValue] = useState(0);

  function hello() {
    // This run infinite times in backend
    console.log("Hello");
    // This will trigger too many re-render because setValue triggers re-render but the reason is function, and this hello function run automatically it is the reason causing re-render again and again. Which leads application crashing.
    // setValue(value + 1);
  }

  // Calling like this cause infinite loop. So we do not have to put any kind of state value which trigger re-rendering.
  hello();

  //So prevent we use useEffect hook.

  return (
    <div>
      <h3>01-code-example.jsx</h3>
      <div>{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase Me
      </button>
    </div>
  );
};
