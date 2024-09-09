const Contact = (props) => {
  return (
    <div>
      Name: {props.name}
      <br />
      DOB: {props.dob}
      <br />
      State: {props.state}
      <hr />
    </div>
  );
};

const App = () => {
  return (
    <>
      {" "}
      <h1>Contacts</h1>
      <Contact name="John Doe" state="NJ" dob="Jan 2001" />
      <Contact name="Jane Doe" state="NJ" dob="May 1999" />
      <Contact name="Kane Doe" state="NJ" dob="July 2005" />
      <Contact name="Wayne Doe" state="NJ" dob="Sep 2006" />
    </>
  );
};

export default App;
