import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Employee from "./Employee";

const Search = () => {
  const { employees, setResults } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  let results = [];

  if (searchTerm.length > 1) {
    results = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.workTitle.toLowerCase().includes(searchTerm)
    );
    // .map((employee) => {
    //   return <Employee key={employee._id} employee={employee} />;
    // return (
    //   <li key={employee._id}>
    //     {employee.name}, {employee.workTitle}
    //   </li>
    // );
  }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.length < 2) {
      alert("Search string must be longer than one character");
    } else {
      setResults(results);
      //   setSearchResults(results);
      setIsHidden(false);
      setSearchTerm("");
    }
  };

  return (
    <div className="column">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsHidden(true);
          }}
          placeholder="Search..."
        ></input>
        <button type="submit">submit</button>
        <ul style={{ display: isHidden ? "block" : "none" }}>
          {results.map((employee) => (
            <Employee key={employee._id} employee={employee} />
          ))}
        </ul>
      </form>
      <div style={{ display: isHidden ? "none" : "block" }}>
        {/* {searchResults} */}
      </div>
    </div>
  );
};

export default Search;
