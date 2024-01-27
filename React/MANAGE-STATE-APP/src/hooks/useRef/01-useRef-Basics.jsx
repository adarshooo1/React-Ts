import { useState, useEffect, useRef } from "react";

// Counter Example:
export const UseRefBasic = () => {
  const [value, setValue] = useState(0);
  const initialValue = useRef(0);
  const isMounted = useRef(false);

  const handleIncrease = () => {
    initialValue.current = initialValue.current + 1;
    setValue(initialValue.current);
  };

  // Form example:
  const refContainer = useRef(null);
  // console.log(refContainer); //Here useRef is null;

  useEffect(() => {
    // console.log(refContainer); //This will point to input box which is null with id: name;

    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    // console.log('re-render')
    refContainer.current.focus(); //This will display the focus the input field. And Inside
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value; //Here refContainer.current.value help to grab value from the input box which we have given a ref value of refContainer.
    console.log(name); //When we hit submit it will log the value of input box.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="name" id="name" ref={refContainer} />
        <button type="submit">Submit</button>
      </form>
      <div>{value}</div>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};
