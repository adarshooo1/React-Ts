import { EmployeeData } from "../Data";
import { CLEAR, REMOVE, RESET } from "./action";

// A reducer function takes two argument, 1: a reducer function, 2: a default state.
const reducer = (state, action) => {
  console.log(state);
  if (action.type === CLEAR) {
    return { ...state, employees: [] };
  }

  if (action.type === RESET) {
    return { ...state, employees: EmployeeData };
  }

  if (action.type === REMOVE) {
    let removeEmployee = state.employees.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, employees: removeEmployee };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

export default reducer;

// A reducer function have 2 things.
// 1: state , 2: action
// Match the Actions
// Return the ...state , changed state or modified state
