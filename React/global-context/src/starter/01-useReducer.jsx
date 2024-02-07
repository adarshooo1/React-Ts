import { useState, useReducer } from "react";
import { EmployeeData } from "../Data";
import reducer from "./reducer";

import { CLEAR, REMOVE, RESET } from "./action";

const defaultState = {
  employees: EmployeeData,
};

export const ReducerList = () => {
  //   // useState way:
  //   const [employees, setEmployees] = useState(EmployeeData);

  //   const handleRemove = (id) => {
  //     let newPeople = employees.filter((person) => person.id !== id);
  //     setEmployees(newPeople);
  //   };

  //   const handleReset = () => {
  //     setEmployees(EmployeeData);
  //   };

  //   const handleClear = () => {
  //     setEmployees([]);
  //   };

  //   // useReducer Way:
  const handleClear = () => {
    dispatch({ type: CLEAR });
  };

  // Reset
  const handleReset = () => {
    dispatch({ type: RESET });
  };

  // Remove
  const handleRemove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <div>
        {state.employees.map((Emp) => {
          const { id, name } = Emp;

          return (
            <div key={id}>
              <h1>{name}</h1>
              <button onClick={() => handleRemove(id)}>Remove</button>
            </div>
          );
        })}
      </div>

      <button
        onClick={state.employees.length === 0 ? handleReset : handleClear}
      >
        {state.employees.length > 0 ? "Clear All" : "Reset"}
      </button>
    </>
  );
};
