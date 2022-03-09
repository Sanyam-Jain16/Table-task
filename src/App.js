import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTableData } from "./actions/tableData";
import "./App.css";
import Table from "./Component/Table";

function App() {
  // const tableData = JSON.parse(localStorage.getItem("items"));
  // const [users, setUsers] = useState(tableData);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getTableData(1));
  }, []);

  // const {
  //   table: { tableData },
  // } = useSelector((state) => state);

  return (
    <div className="App">
      {/* {console.log("users",users)} */}
      <Table />
    </div>
  );
}

export default App;
