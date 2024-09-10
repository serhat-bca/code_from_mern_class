/* eslint-disable react/prop-types */
const Contact = (props) => {
  return (
    <div>
      Name: {props.contact.name}
      <br />
      DOB: {props.contact.dob}
      <br />
      State: {props.contact.state}
      <hr />
    </div>
  );
};

const App = () => {
  const john = { name: "John Doe", dob: "Jan 2001", state: "NJ" };
  const jane = { name: "Jane Doe", dob: "May 1999", state: "NJ" };
  const kane = { name: "Kane Doe", dob: "July 2005", state: "NJ" };
  const wayne = { name: "Wayne Doe", dob: "Sep 2006", state: "NJ" };
  return (
    <>
      <h1>Contacts</h1>
      <Contact contact={john} />
      <Contact contact={jane} />
      <Contact contact={kane} />
      <Contact contact={wayne} />
    </>
  );
};

export default App;
