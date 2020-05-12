import { all } from "redux-saga/effects";
import { watcherBook } from "./book";

export default function* rootSaga() {
	yield all([
		watcherBook()
	]);
}
