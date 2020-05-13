import { takeLatest, call, put } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as bookApi from '../api/bookApi';
import * as bookAction from '../actions/book';

export function* watcherBook() {
	yield takeLatest(types.BOOK_LIST_REQUEST, workerBook);
}

function fetchBook() {
	return bookApi.getBooksList();
}

function* workerBook() {
	try {
		const response = yield call(fetchBook);
		yield put(bookAction.getBookListSuccess(response));
	} catch (error) {
		yield put(bookAction.getBookListFailure());
	}
}
