import { combineReducers } from "redux";
import tableReducer from "./tableData";

const createRootReducer = () => 
    combineReducers({
        table: tableReducer
    });
export default createRootReducer;