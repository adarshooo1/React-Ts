import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// Initial Data when a application is newly created
const initialState = {
  loading: true,
  users: [],
  error: "",
};

// Actions:
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// Reducer Function
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Action Creators
// Fetching action creator
const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

// Success action creator
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

// Failure action creator
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(logger.default, thunk)
);

// Action creator returns an action, but thunk provides ability for an action creator to return a function instead of plain action object;
const fetchUser = (id) => {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    try {
      const { data } = await axios.get(`http://localhost:3000/users/${id}`);
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser(1));
