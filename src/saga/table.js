import { call, put } from "redux-saga/effects";
import axios from "axios";
import { takeLatest } from "redux-saga/effects";
import { GET_TABLE_DATA, setTableData } from "../actions/tableData";


export function* handleGetTableDataPerformed({page}) {
    try {
        const { data } = yield call(axios.get, `https://reqres.in/api/users?page=${page}`);
        localStorage.setItem("items", JSON.stringify(data.data));
        yield put(setTableData(data));
    } catch(err) {
        console.log(err);
    }
}

export default function* () {
    yield takeLatest(GET_TABLE_DATA, handleGetTableDataPerformed)
}
