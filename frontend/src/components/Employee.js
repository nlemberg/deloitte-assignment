import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Employee = () => {
  const { employees } = useContext(GlobalContext);

  return (
    <ul>
      {employees.length > 0
        ? employees.map((employee) => (
            <li key={employee._id}>
              <img src={employee.imageUrl} alt={employee.name} />
              <h4>{employee.name}</h4>
              <p>{employee.workTitle}</p>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Employee;
