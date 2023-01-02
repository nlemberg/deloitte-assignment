import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const url =
  "https://busy-puce-gopher-wrap.cyclic.app/api/employees" ||
  "http://localhost:5000/api/employees";

const initialState = {
  employees: [],
  quick: true,
  searchStr: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function searchEmployees(searchStr) {
    const { data: employees } = await axios.get(`${url}/${searchStr}`);
    dispatch({
      type: "FULL_SEARCH",
      payload: employees,
    });
  }

  async function quickSearch(searchStr) {
    const { data: employees } = await axios.get(`${url}/3/${searchStr}`);
    dispatch({
      type: "QUICK_SEARCH",
      payload: employees,
    });
  }

  function clearSearch() {
    dispatch({
      type: "QUICK_SEARCH",
      payload: [],
    });
  }

  function setSearchStr(str) {
    dispatch({
      type: "SEARCH_STR",
      payload: str,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        quick: state.quick,
        searchStr: state.searchStr,
        searchEmployees,
        quickSearch,
        clearSearch,
        setSearchStr,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
