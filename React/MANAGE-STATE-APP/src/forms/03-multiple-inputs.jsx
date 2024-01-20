import { useState } from "react";
import "./style.css";
export const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    
    // Here with the help of name attribute in the input tag of , Name, email and Password, here we dynamically put inputs.
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <form onClick={handleSubmit}>
      <h3>React Forms</h3>

      <div className="stacked">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="name"
          id="name"
          value={user.name}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="stacked">
        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="stacked">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <button type="submit" className="submit_btn">
        Submit
      </button>
    </form>
  );
};
