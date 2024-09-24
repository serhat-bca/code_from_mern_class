import republican from "./republican.png";
import democratic from "./democratic.png";
import american from "./american.png";

import "./App.css";

const App = () => {
  return (
    <div className="party-container">
      <div className="party">
        <h2>Democrats</h2>
        <div className="box blue">
          <img src={democratic} alt="Democrats" className="party-image" />
          <br />
          <button className="vote-button">Vote</button>
          <p className="vote-count">Vote Count: </p>
        </div>
      </div>

      <div className="party">
        <h2>Republicans</h2>
        <div className="box red">
          <img src={republican} alt="Republicans" className="party-image" />
          <br />
          <button className="vote-button">Vote</button>
          <p className="vote-count">Vote Count: </p>
        </div>
      </div>

      <div className="party">
        <h2>Independent</h2>
        <div className="box yellow">
          <img src={american} alt="Independents" className="party-image" />
          <br />
          <button className="vote-button">Vote</button>
          <p className="vote-count">Vote Count: </p>
        </div>
      </div>
    </div>
  );
};

export default App;
