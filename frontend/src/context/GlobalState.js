import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const url = "http://localhost:5000/api/employees";

const initialState = {
  employees: [],
  results: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getEmployees() {
    const { data: employees } = await axios.get(url);
    dispatch({
      type: "GET_ALL",
      payload: employees,
    });
  }

  function setResults(data) {
    dispatch({
      type: "SET_RESULTS",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        results: state.results,
        getEmployees,
        setResults,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
