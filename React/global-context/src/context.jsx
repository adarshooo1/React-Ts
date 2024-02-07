//A global custom hook.

import { useState, createContext, useContext } from "react";

const GlobalContext = createContext();

// Custom hook
export const useGlobalContext = () => useContext(GlobalContext);

const Context = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;

// Notes:
// Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.
//It need to reference with createContext Hook, then call it inside the functional component like a tag and that tag have 3 props: 1:key, 2:Children, 3:Value #important

// Step 1:
// example: GlobalContext = createContext()

// Step 2:
// createContext hook provides [1:.Provider #important, 2:.consumer and 3:.displayName] Instances with the tag
// Example : <GlobalContext.provider></GlobalContext.provider>

// Step 3:
// Assign Value to the context you want to use across the application
// const [name, setName] = useState();
// Example : <GlobalContext.provider value={{name , setName}}></GlobalContext.provider>

// Step 4:
// Wrap it over the App component:
// <Context>
//   <App />
// </Context>

// Step 5:
// Pass children prop because as we can see it has the <App/> component.
// const Context = (props) =>{
// return
// <GlobalContext.provider value={{name , setName}}>
// {props.children}
// </GlobalContext.provider>
// )}

// or

// const Context = ({children}) =>{
// return
// <GlobalContext.provider value={{name , setName}}>
// {children}
// </GlobalContext.provider>
// )}

// #Done
