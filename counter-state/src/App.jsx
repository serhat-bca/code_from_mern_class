import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    console.log("counter", counter);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default App;
