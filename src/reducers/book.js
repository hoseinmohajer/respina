import * as types from '../actions/types';
const initialState = {
	loading: false,
	data: []
};

const Books = (state = initialState, action) => {
	switch (action.type) {
		case types.BOOK_LIST_REQUEST:
			return { ...state, loading: true };
		case types.BOOK_LIST_SUCCESS:
			return { ...state, data: action.payLoad, loading: false };
		case types.BOOK_LIST_FAILURE:
			return { ...state, loading: false };
		default:
			return state;
	}
};

export default Books;