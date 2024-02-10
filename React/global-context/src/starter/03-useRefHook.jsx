import { useState, useRef, useEffect } from "react";
const UseRefHook = () => {
  const [text, setText] = useState("");
  const textRef = useRef();

  //   function focus() {
  //     textRef.current.focus();
  //     textRef.current.value = "Value Some Value";
  //   }

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div>
        TEXT:{text} and useREf : {textRef.current}
      </div>
      <button onClick={focus}>FOCUS</button>
    </div>
  );
};

export default UseRefHook;
