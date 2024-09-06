const ReactLogo = (props) => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
      alt=""
      width={props.size}
    />
  );
};

const App = () => {
  const releaseYear = 2013;
  const developerCompany = "Facebook, Inc.";
  console.log("Release year: ", releaseYear);
  console.log(`Developer company: ${developerCompany}`);
  console.log("Hello from App component");
  return (
    <>
      <h1>Hello React!!!</h1>
      <ReactLogo size="100" />
      <ReactLogo size="75" />
      <p>
        React was developed by {developerCompany} and was first released{" "}
        {releaseYear}, {new Date().getFullYear() - releaseYear} years ago.
      </p>
    </>
  );
};

export default App;
