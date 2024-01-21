import { useState } from "react";
import "./style.css";

const Frameworks = ["react", "vue", "svelte", "angular"];

export const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    setShipping(e.target.checked);
    console.log(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  return (
    <form>
      <h3>React Forms</h3>

      <div className="stacked">
        <label htmlFor="shipping">Free Delivery</label>
        <input
          type="checkbox"
          name="shipping"
          id="shipping"
          value={shipping}
          onChange={handleShipping}
        />
      </div>

      <div className="stacked">
        <label htmlFor="framework">Framework</label>
        <select
          name="framework"
          id="framework"
          value={framework}
          onChange={handleFramework}
        >
          {Frameworks.map((library) => {
            return <option key={library}>{library}</option>;
          })}
        </select>
      </div>

      <button type="submit" className="submit_btn">
        Submit
      </button>
    </form>
  );
};
