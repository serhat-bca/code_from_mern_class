/* eslint-disable react/prop-types */
const Employee = (props) => {
  const weekly = () => {
    return moneyFormat(props.hrly * 40);
  };

  const moneyFormat = (amount) => {
    return `$${amount.toLocaleString("en-US")}`;
  };

  const annual = () => {
    return moneyFormat(props.hrly * 40 * 52);
  };

  return (
    <p>
      {props.name} works at {props.department}.
      <br />
      Hourly Rate: {props.hrly}
      <br />
      Weekly Rate: {weekly()}
      <br />
      Annual Rate: {annual()}
    </p>
  );
};

const App = () => {
  return (
    <div>
      <h1>Employees</h1>
      <Employee name="John Doe" department="IT Support" hrly={27.45} />
      <Employee name="Jack Doe" department="Finance" hrly={45} />
      <Employee name="Jane Doe" department="Software Development" hrly={63} />
    </div>
  );
};

export default App;
