// importing createStore and logger middleWale
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger"; //To log result

// Action as Constants
const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
const DECREMENT_BY_AMOUNT = "DECREMENT_BY_AMOUNT";
const INCREMENT_BY_ONE = "INCREMENT_BY_ONE";
const DECREMENT_BY_ONE = "DECREMENT_BY_ONE";

// Default State
const defaultState = {
  balance: 1000,
};

// Reducer Function
function reducerFunction(state, action) {
  if (action.type === INCREMENT_BY_AMOUNT) {
    return { ...state, balance: state.balance + action.payload }; //Must be mutable. So that we can jump or check back the previous state.
  }
  if (action.type === DECREMENT_BY_AMOUNT) {
    return { ...state, balance: state.balance - action.payload }; //Must be mutable. So that we can jump or check back the previous state.
  }

  if (action.type === INCREMENT_BY_ONE) {
    return { ...state, balance: state.balance + 1 }; //Must be mutable. So that we can jump or check back the previous state.
  }

  if (action.type === DECREMENT_BY_ONE) {
    return { ...state, balance: state.balance - 1 }; //Must be mutable. So that we can jump or check back the previous state.
  }
  return state;
}

// Creating Store
const store = createStore(
  reducerFunction, //Reducer Function
  defaultState, //Default State
  applyMiddleware(logger.default) //Enhancer / Middleware
);

// Created an Empty array to store the changes in the state.
const StateArray = [];

function incByAmt(amount) {
  return { type: INCREMENT_BY_AMOUNT, payload: amount };
}

function incByOne() {
  return { type: INCREMENT_BY_ONE };
}

function decByOne() {
  return { type: DECREMENT_BY_ONE };
}

// setInterval for continue re-run the dispatch action after a time of interval.
setInterval(() => {
  store.dispatch(incByAmt(400));

  StateArray.push(store.getState()); //Get the current state and push into the State Array.
  console.log(StateArray); //Log the array
}, 200);

console.log(store.getState());

// Further Actions:
store.dispatch({ type: DECREMENT_BY_AMOUNT, payload: 1000 });
store.dispatch(incByOne());
store.dispatch(decByOne());
