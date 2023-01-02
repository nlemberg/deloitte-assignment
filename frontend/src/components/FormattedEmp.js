import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const FormattedEmp = () => {
  const { employees, searchStr } = useContext(GlobalContext);

  const getHighlight = (employee) => {
    const matches = employee.match(new RegExp(`${searchStr}`, "gi"));
    const arr = employee.split(new RegExp(`${searchStr}`, "gi"));
    let result = [];
    if (matches) {
      if (arr[0] === "") {
        for (let i = 0; i < matches.length; i++) {
          result.push(<b key={result.length}>{matches[i]}</b>);
          result.push(<span key={result.length}>{arr[i + 1]}</span>);
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          result.push(<span key={result.length}>{arr[i]}</span>);
          result.push(<b key={result.length}>{matches[i]}</b>);
        }
      }
      return result;
    }
    return <span>{employee}</span>;
  };

  return (
    <ul>
      {employees.length > 0
        ? employees.map((employee) => (
            <li key={employee._id}>
              <img src={employee.imageUrl} alt={employee.name} />
              <h4>{getHighlight(employee.name)}</h4>
              <p>{getHighlight(employee.workTitle)}</p>
            </li>
          ))
        : null}
    </ul>
  );
};

export default FormattedEmp;
