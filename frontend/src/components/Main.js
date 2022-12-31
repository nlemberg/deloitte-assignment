import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Search from "./Search";

const Main = () => {
  const { getEmployees } = useContext(GlobalContext);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  return (
    <div>
      <h1>Looking for an employee?</h1>
      <Search />
    </div>
  );
};

export default Main;
