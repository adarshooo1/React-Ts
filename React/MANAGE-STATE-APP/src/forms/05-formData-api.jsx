import { useState } from "react";
import "./style.css";

export const FormDataAPI = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);/
    const formData = new FormData(e.currentTarget);
    console.log(formData);

    // // Like this we can specifically get Values one by one.
    // // const getEmail = formData.get("email");
    // console.log(getEmail); //output: adarshsighak001@gmail.com

    // // This will have all the data in the form of array in the array.
    // console.log([...formData.entries()]); //output :[Array(2), Array(2), Array(2)]
    // // detailed output:
    // // 0: (2) ['name', 'Adarsh']
    // // 1: (2) ['email', 'adarshsinghak001@gmail.com']
    // // 2: (2) ['password', "adarsh#kei;'"]
    // //     length:3
    // // [[Prototype]]: Array(0)

    const newUser = Object.fromEntries(formData);

    // We can send this detail to the backend api or every new user.
    console.log(newUser); //Output:{name: 'Adarsh', email: 'adarshsinghak001@gmail.com', password: "adarsh#kei;'"}
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>From Data Api</h1>
      <div className="stacked">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="form-input" />
      </div>
      <div className="stacked">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="form-input" />
      </div>
      <div className="stacked">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
        />
      </div>

      <button type="submit" className="submit_btn">
        Submit
      </button>
    </form>
  );
};
