import { useState } from "react";
import "./style.css";
export const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form onClick={handleSubmit}>
      <h3>React Forms</h3>

      <div className="stacked">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="form-input"
        />
      </div>

      <div className="stacked">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="form-input"
        />
      </div>

      <button type="submit" className="submit_btn">
        Submit
      </button>
    </form>
  );
};
