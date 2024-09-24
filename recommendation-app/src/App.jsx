import { useState } from "react";

const App = () => {
  const [recObj, setRecObj] = useState({ rec: 0, notRec: 0 });

  const recommend = () => {
    setRecObj({ ...recObj, rec: recObj.rec + 1 });
  };
  const notRecommend = () => {
    setRecObj({ ...recObj, notRec: recObj.notRec + 1 });
  };

  return (
    <div>
      <h1>Recommendation App</h1>
      <p>Do you recommend the new iPhone 16 ProMax?</p>
      <button onClick={recommend}>Recommend</button> {recObj.rec}
      <br />
      <button onClick={notRecommend}>Not Recommend</button> {recObj.notRec}
    </div>
  );
};

export default App;
