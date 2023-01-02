import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Search = () => {
  const context = useRef(useContext(GlobalContext));
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.length > 1) {
      context.current.quickSearch(searchTerm);
      context.current.setSearchStr(searchTerm);
    } else {
      context.current.clearSearch();
      context.current.setSearchStr("");
    }
  }, [context, searchTerm]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.length < 2) {
      alert("Search string must be longer than one character");
    } else {
      await context.current.searchEmployees(searchTerm);
    }
  };

  return (
    <div className="column">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search..."
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Search;
