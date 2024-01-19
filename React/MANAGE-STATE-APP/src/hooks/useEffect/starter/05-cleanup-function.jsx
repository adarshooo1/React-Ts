import { useState, useEffect } from "react";
import { useHook } from "library";

export const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <button
        className="bttn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Button
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // Some Logic
    };

    window.addEventListener("scroll", someFunc);

    // This is used for clean up.
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
};
