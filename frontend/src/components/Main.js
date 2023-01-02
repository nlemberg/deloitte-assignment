import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Employee from "./Employee";
import FormattedEmp from "./FormattedEmp";
import Search from "./Search";

const Main = () => {
  const { quick } = useContext(GlobalContext);

  return (
    <div className="wrapper">
      <div className="column">
        <h1>Looking for an employee?</h1>
        <p className="subtitle">Start typing to get suggestions</p>
        <div>
          <Search />
          {quick ? <FormattedEmp /> : <Employee />}
        </div>
      </div>
    </div>
  );
};

export default Main;
