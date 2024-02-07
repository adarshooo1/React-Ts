import { useState } from "react";
import "./App.css";
import { useGlobalContext } from "./context";

function App() {
  const { name, setName } = useGlobalContext();
  const [inputFiled, setInputField] = useState("");

  const onSubmit = () => {
    setName(inputFiled);
    setInputField("");
  };

  const handleInput = (e) => {
    setInputField(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <>
      <div>
        <h1 className="text-red-700">Global Context Revision</h1>

        <div>
          <div>Your name is :- {name}</div>

          <div className="flex flex-col">
            <label htmlFor="name">Enter your Name</label>
            <input
              type="text"
              name="name"
              value={inputFiled}
              placeholder="Enter your name"
              onChange={handleInput}
              onKeyUp={handleKeyPress}
            />
          </div>
          <button onClick={onSubmit}>Enter</button>
        </div>
      </div>
    </>
  );
}

export default App;
