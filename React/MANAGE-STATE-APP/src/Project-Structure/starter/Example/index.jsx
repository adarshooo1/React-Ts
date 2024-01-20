import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const Example = () => {
  return (
    <div>
      Example
      <FirstComponent />
      <SecondComponent />
    </div>
  );
};

export default Example;

// Here we fist import both the component then export both at one time.
