import { useState, useRef } from "react";

export const UseRefBasic = () => {
  const [value, setValue] = useState(0);
  const initialValue = useRef(0);

  const handleIncrease = () => {
    initialValue.current = initialValue.current + 1;
    setValue(initialValue.current);
  };

  return (
    <div>
      <div>{value}</div>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};
