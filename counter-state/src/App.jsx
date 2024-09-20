import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  // javascript array destructuring
  const arr = [10, 20, 30, 40, 50, 60, 70];
  const [a, b, c, ...d] = arr;
  console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d);

  const stateLike = (value) => {
    const printer = (a) => console.log("Parameter", a);
    return [value, printer];
  };

  const [x, y] = stateLike("Hello");
  console.log("x: ", x);
  y("xyz");

  const increase = () => {
    console.log("counter", counter);
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>
      <p>Counter2: {counter1}</p>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Increase Counter 2
      </button>
    </div>
  );
};

export default App;
