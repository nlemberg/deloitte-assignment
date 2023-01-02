import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Employee = () => {
  const { employees } = useContext(GlobalContext);

  return (
    <div className="results-outer">
      <ul className="results">
        {employees.length > 0
          ? employees.map((employee) => (
              <li key={employee._id}>
                <img src={employee.imageUrl} alt={employee.name} />
                <div className="li-text">
                  <h4>{employee.name}</h4>
                  <p>{employee.workTitle}</p>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default Employee;
