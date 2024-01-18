import React, { useState, useEffect } from "react";

// useEffect Basic:
// useEffect is a hook in react that allows you to perform
// side effects in function components, there is not need
// for urban dictionary - basically and work outside of
// the component. Some examples of side effects are:
// Subscriptions, fetching data, direct updating the DOM,
// event listeners, timers, etc.

// - useEffect hook
// - accepts two argument (second optional)
// - first argument - callback function
// - second argument - dependency array
// - by default run on each render
// - callback can't return promise (so can't make is async)
// - if dependency array empty [] runs only on initial render

export const Starter = () => {
  const [value, setValue] = useState(0);

  //   Plain function re-render again and again
  function Hello() {
    console.log("I am hello");
  }
  Hello();

  //   useEffect
  useEffect(() => {
    async function greeting() {
      let value = "Hello World";
      console.log(value);
    }
    greeting();
    // This empty dependency array will tell to trigger re-render initially, not not trigger re-render.
  }, []);

  return (
    <div>
      <h3>02-useEffect-basic.jsx</h3>
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
