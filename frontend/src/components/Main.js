import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Employee from "./Employee";
import FormattedEmp from "./FormattedEmp";
import Search from "./Search";

const Main = () => {
  const { quick } = useContext(GlobalContext);

  return (
    <div className="column">
      <h1>Looking for an employee?</h1>
      <Search />
      {quick ? <FormattedEmp /> : <Employee />}
    </div>
  );
};

export default Main;
