import * as types from './types';

export const loginRequest = (data) => {
	return {
		type: types.LOGIN_REQUEST,
		data
	};
};

export const loginSuccess = (data) => {
	return {
		type: types.LOGIN_SUCCESS,
		payLoad: data
	};
};

export const loginFailure = () => {
	return {
		type: types.LOGIN_FAILURE
	};
};