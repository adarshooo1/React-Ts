function Starter() {
  let count = 0;

  const increaseCounter = () => {
    count = count + 1;
    console.log(count);
  };

  const decreaseCounter = () => {
    count = count - 1;
    console.log(count);
  };

  return (
    <>
      <div className="StateContainer">
        <div className="count_display"> Count : {count}</div>
        <div className="button_div">
          <button className="counter" onClick={decreaseCounter}>
            Decrease
          </button>
          <button className="counter" onClick={increaseCounter}>
            Increase
          </button>
        </div>
      </div>
    </>
  );
}

export default Starter;

// Here, Note:
// Logic is perfect, but this logic isn't trigger re-rendering thats the reason it doesn't show changes.
// This is the error with normal function, which is easily handled using states.
