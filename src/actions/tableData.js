export const GET_TABLE_DATA = "GET_TABLE_DATA"; 
export const SET_TABLE_DATA = "SET_TABLE_DATA"; 

export const getTableData = (page) => ({
    type: GET_TABLE_DATA,
    page
});

export const setTableData = (data) => ({
    type: SET_TABLE_DATA,
    data
});
