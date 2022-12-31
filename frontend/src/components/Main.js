import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Employee from "./Employee";
import Search from "./Search";

const Main = () => {
  const { getEmployees, results } = useContext(GlobalContext);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <div className="column">
      <h1>Looking for an employee?</h1>
      <Search />
      <ul>
        {results.map((employee) => (
          <Employee key={employee._id} employee={employee} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
