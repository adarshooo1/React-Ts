import { useState } from "react";
import "./style.css";
import { data } from "../data";

export const UserChallenge = () => {
  const [name, setName] = useState("");
  const [isData, setIsData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    // New Object Functionality
    const newId = isData.length + 1;
    const newUser = { id: newId, name: name };
    const AddUser = [...isData, newUser];
    setIsData(AddUser);
  };

  const handleRemove = (id) => {
    const newData = isData.filter((person) => person.id !== id);
    setIsData(newData);
    console.log(isData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add Users</h3>

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

        <button type="submit" className="submit_btn">
          Submit
        </button>
      </form>

      <h2>Existing User</h2>
      <div>
        {isData.map((data) => {
          return (
            <div key={data.id} style={{ display: "flex" }}>
              <h1>{data.name}</h1>
              <button
                onClick={() => {
                  handleRemove(data.id);
                }}
                className="bttn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
