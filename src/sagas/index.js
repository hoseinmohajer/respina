import { all } from "redux-saga/effects";
import { watcherBook } from "./book";
import { watcherAuth } from "./auth";

export default function* rootSaga() {
	yield all([
		watcherBook(),
		watcherAuth()
	]);
}
