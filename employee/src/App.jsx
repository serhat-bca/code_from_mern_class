/* eslint-disable react/prop-types */
const Employee = (props) => {
  return (
    <p>
      {props.name} works at {props.department}.
    </p>
  );
};

const App = () => {
  return (
    <div>
      <h1>Employees</h1>
      <Employee name="John Doe" department="IT Support" />
    </div>
  );
};

export default App;
