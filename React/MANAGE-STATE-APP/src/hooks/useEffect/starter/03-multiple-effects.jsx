import { useState, useEffect } from "react";

export const MultipleEffect = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  //   Custom function which will
  function handleIncrease(setter, val) {
    setter(val + 1);
  }

  useEffect(() => {
    console.log("Hello React");
    //It trigger re-render when we make changes with the both value and secondValue state.
  }, [value, secondValue]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>03-multiple-useEffect.jsx</h1>
        <div className="stateHolder">
          <span>Value : {value}</span>
          <button
            className="btn"
            onClick={() => handleIncrease(setValue, value)}
          >
            Value
          </button>
        </div>

        <div className="stateHolder">
          <span>Second Value : {secondValue}</span>
          <button
            className="btn"
            onClick={() => handleIncrease(setSecondValue, secondValue)}
          >
            Second Value
          </button>
        </div>
      </div>
    </>
  );
};
