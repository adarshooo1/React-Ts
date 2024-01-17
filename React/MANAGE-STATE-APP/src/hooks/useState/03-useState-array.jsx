import { data } from "../../data";
import { useState } from "react";

export function Starter() {
  const val = useState();
  console.log(val); //(2)[(undefined, ƒ)]; => This represents useState has 2 things first 1st is undefined value and 2nd a function;
  const val2 = useState("hello");
  console.log(val2); //(2) ['hello', ƒ]
  const val3 = useState(10)[0];
  console.log(val3); //10
  const val4 = useState()[1];
  console.log(val4);
  //   dispatchSetState(fiber, queue, action) {
  //           {
  //             if (typeof arguments[3] === "function") {
  //               error("State updates from the useState() and useReducer() Hooks don't support
  //   const [count, setCount] = useState(0);
}

export function Final() {
  const [people, setPeople] = useState(data);

  function removeSingle(id) {
    // console.log(id);
    const newData = people.filter((person) => person.id !== id);
    setPeople(newData);
  }

  function clearAllItems() {
    setPeople([]);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button
              type="button"
              className="counter"
              onClick={() => removeSingle(id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button onClick={clearAllItems}>Remove All</button>
      {console.log(data)}
    </>
  );
}
