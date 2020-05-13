import * as types from '../actions/types';
const initialState = {
	loading: false,
	data: []
};

const Auth = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN_REQUEST:
			return { ...state, loading: true };
		case types.LOGIN_SUCCESS:
			return { ...state, data: action.payLoad, loading: false };
		case types.LOGIN_FAILURE:
			return { ...state, loading: false };
		default:
			return state;
	}
};

export default Auth;