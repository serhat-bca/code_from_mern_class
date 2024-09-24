/* eslint-disable react/prop-types */
import { useState } from "react";

const DisplayTrack = ({ track }) => {
  return <>{track.join("-")}</>;
  // conditional rendering with if statement
  // if (track.length === 0) {
  //   return <>No Recommendations entered yet.</>;
  // }
  // return <>{track.join("-")}</>;
  // conditional rendering with ternary operator
  // return track.length === 0 ? (
  //   <>No Recommendations yet.</>
  // ) : (
  //   <>{track.join("-")}</>
  // );
};

const App = () => {
  const [recObj, setRecObj] = useState({ rec: 0, notRec: 0 });
  const [track, setTrack] = useState([]);

  const recommend = () => {
    setRecObj({ ...recObj, rec: recObj.rec + 1 });
    setTrack([...track, "Y"]); // safe
  };
  const notRecommend = () => {
    setRecObj({ ...recObj, notRec: recObj.notRec + 1 });
    setTrack(track.concat("N")); // safe
  };

  return (
    <div>
      <h1>Recommendation App</h1>
      <p>Do you recommend the new iPhone 16 ProMax?</p>
      <button onClick={recommend}>Recommend</button> {recObj.rec}
      <br />
      <button onClick={notRecommend}>Not Recommend</button> {recObj.notRec}
      <p>
        Track of Recommendations:
        <br />
        <DisplayTrack track={track} />
      </p>
    </div>
  );
};

export default App;
