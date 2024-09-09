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
      <h1>{season}</h1>
      <p>
        {episode1} {viewsEp1}
      </p>
      <p>
        {episode2} {viewsEp2}
      </p>
      <p>
        {episode3} {viewsEp3}
      </p>
      <p>
        Seinfeld Season 1, Total Number of Views{" "}
        {viewsEp1 + viewsEp2 + viewsEp3}
      </p>
    </div>
  );
};

export default App;
