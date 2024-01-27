import useToggle from "./useToggle";

export const CustomHook = () => {
  const { show, toggle } = useToggle(false);

  return (
    <div className="container">
      <h1>Toggle Hook Button</h1>
      <button className="bttn" onClick={toggle}>
        {show ? "Close" : "Open"}
      </button>
      {show && <h1>Menu Open</h1>}
    </div>
  );
};
