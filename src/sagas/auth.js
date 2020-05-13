import { takeLatest, call, put, delay } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as authApi from '../api/authApi';
import * as authAction from '../actions/auth';

export function* watcherAuth() {
	yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}

function login(data) {
	return authApi.login(data);
}

function* workerLogin(action) {
	try {
		const response = yield call(login, action.data);
		const data = response.data;
		yield delay(3000);
		sessionStorage.setItem('loggedIn', true);
		sessionStorage.setItem('userInfo', JSON.stringify(data));
		yield put(authAction.loginSuccess(data));
	} catch (error) {
		yield put(authAction.loginFailure());
	}
}
