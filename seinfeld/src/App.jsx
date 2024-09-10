/* eslint-disable react/prop-types */
const ShowTitle = (props) => {
  return <h1>{props.season}</h1>;
};

const Episodes = (props) => {
  return (
    <>
      <p>
        {props.episode1} {props.viewsEp1}
      </p>
      <p>
        {props.episode2} {props.viewsEp2}
      </p>
      <p>
        {props.episode3} {props.viewsEp3}
      </p>
    </>
  );
};

const TotalSeasonViews = (props) => {
  return (
    <p>
      Seinfeld Season 1, Total Number of Views{" "}
      {props.viewsEp1 + props.viewsEp2 + props.viewsEp3}
    </p>
  );
};

const App = () => {
  const season = "Seinfeld Season 1";
  const episode1 = "Good News, Bad News";
  const viewsEp1 = 6905040;
  const episode2 = "The Stakeout";
  const viewsEp2 = 3905040;
  const episode3 = "The Robbery";
  const viewsEp3 = 4498237;
  return (
    <div>
      <ShowTitle season={season} />
      <Episodes
        episode1={episode1}
        episode2={episode2}
        episode3={episode3}
        viewsEp1={viewsEp1}
        viewsEp2={viewsEp2}
        viewsEp3={viewsEp3}
      />
      <TotalSeasonViews
        viewsEp1={viewsEp1}
        viewsEp2={viewsEp2}
        viewsEp3={viewsEp3}
      />
    </div>
  );
};

export default App;
