// Importing necessary modules from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Defining the type for the component's props
type Props = {
  name: string;
};

// Defining a functional component named Greeting
const Greeting = ({ name }: Props) => {
  // Uncomment one of the return statements below based on your preferred syntax
  // Option 1: JSX syntax
  return <h1>Hello, My name is {name}</h1>;

  // Option 2: Using React.createElement
  // return React.createElement("h1", { name }, `hi my name is ${name}`);

  // Option 3: JSX syntax with wrapping div
  // return (
  //   <div>
  //     <h1>Hello my name is {name}</h1>
  //   </div>
  // );

  // Option 4: Using React.createElement with wrapping div
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", { name }, `Hello, my name is ${name}`)
  // );

  //Above is Same but 2 different ways to represent the jsx or tsx. Choose any one as per Easiness.
};

// Exporting the Greeting component as the default export
export default Greeting;

// Creating a React root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Rendering the Greeting component with a prop (name="Adarsh") into the root
root.render(<Greeting name="Adarsh" />);
