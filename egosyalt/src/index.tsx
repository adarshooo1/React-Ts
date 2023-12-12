// Importing necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Defining the type for the component's props
type Props = {
  name: string;
};

// Defining a functional component named Greeting
const Greeting = ({ name }: Props) => {
  // Rendering a heading element with a dynamic greeting message
  return <h1>Hello, My name is {name}</h1>;
};

// Exporting the Greeting component as the default export
export default Greeting;

// Creating a React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Rendering the Greeting component with a prop (name="Adarsh") into the root
root.render(<Greeting name="Adarsh" />);
