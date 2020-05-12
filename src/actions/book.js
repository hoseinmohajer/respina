import * as types from './types';

export const getBookList = () => {
	return {
		type: types.BOOK_LIST_REQUEST
	};
};

export const getBookListSuccess = (data) => {
	return {
		type: types.BOOK_LIST_SUCCESS,
		payLoad: data
	};
};
export const getBookListFailure = () => {
	return {
		type: types.BOOK_LIST_FAILURE
	};
};