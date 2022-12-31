import React from "react";

const Employee = ({ employee }) => {
  return (
    <li key={employee._id}>
      <img src={employee.imageUrl} alt={employee.name} />
      <span>
        {employee.name}, {employee.workTitle}
      </span>
    </li>
  );
};

export default Employee;
