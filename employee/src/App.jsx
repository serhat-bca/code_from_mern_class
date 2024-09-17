/* eslint-disable react/prop-types */
const Employee = ({ name, department, hrly }) => {
  const weekly = () => {
    return moneyFormat(hrly * 40);
  };

  const moneyFormat = (amount) => {
    return `$${amount.toLocaleString("en-US")}`;
  };

  const annual = () => {
    return moneyFormat(hrly * 40 * 52);
  };

  return (
    <p>
      {name} works at {department}.
      <br />
      Hourly Rate: {hrly}
      <br />
      Weekly Rate: {weekly()}
      <br />
      Annual Rate: {annual()}
    </p>
  );
};

const App = () => {
  const employeeObj = {
    name: "Kane",
    department: "HR",
    hrly: "57",
  };

  const { name, department, hrly } = employeeObj;

  console.log("name", name, "department", department, "hourly rate", hrly);

  // console.log("name", employeeObj.name);
  // console.log("department", employeeObj.department);

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
