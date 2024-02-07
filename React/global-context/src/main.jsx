import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./context.jsx";
import { ReducerList } from "./starter/01-useReducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      {/* <App /> */}
      <ReducerList />
    </Context>
  </React.StrictMode>
);
