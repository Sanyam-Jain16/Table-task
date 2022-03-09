import { all } from "redux-saga/effects";
import tableSaga from "./table";

export default function* () {
    yield all([
        tableSaga()
    ]);
}