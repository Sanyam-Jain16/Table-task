import { SET_TABLE_DATA } from "../actions/tableData";

const initialState = {
  tableData: "",
};

export default (state, actions) => {
  if (state === undefined) {
    return initialState;
  }
  switch (actions.type) {
    case SET_TABLE_DATA:
      const { data } = actions.data;
      return {
        ...state,
        tableData: actions.data,
      };
    default:
      return state;
  }
};
