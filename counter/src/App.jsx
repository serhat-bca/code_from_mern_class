import { refresh } from "./main";

const App = () => {
  let counter = 0;

  const increase = () => {
    console.log("counter", counter);
    counter++;
    console.log("counter after increase", counter);
    refresh();
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <p>Counter: {counter}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default App;
