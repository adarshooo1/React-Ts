import { useState } from "react";

function Starter() {
  // Here we destructure 2 useState properties from useState hook;
  const [count, setCount] = useState(0);

  const counterIncrease = () => {
    // Here useState helps to trigger re-render and display the changes on the screen without refreshing the screen or app. and using virtual dom it very easily changes the value.
    setCount(count + 1);
  };

  const counterDecrease = () => {
    if (count <= 0) {
      alert("Count must be greater than 0");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="StateContainer">
        <div className="count_display"> Count : {count}</div>
        <div className="button_div">
          <button className="counter" onClick={counterDecrease}>
            Decrease
          </button>
          <button className="counter" onClick={counterIncrease}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
}

export default Starter;

// useState Hook:-
// Returns an array with two element: the current state value, and a function that we can use to update the state accepts default value as an argument;
// State update trigger re-render.

// Initial Render and Re-render
// In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as 'mounting' the component.

// Re-renders, on the other hand, happen when the components state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, So that the necessary changes are made.

// There are few ways that you can trigger a re-render in a React Component:
// By changing the component state or props. when the components state or props change, React will re-render the component to reflect these changes.

// General Rules of Hooks:
// Start with use (both -react and custom hooks)
// component must be uppercase
// don't call hooks conditionally
// set functions don't update state immediately.
