import { combineReducers } from "redux";
import {connectRouter} from "connected-react-router";
import Books from "./book";

export default history =>
	combineReducers({
		router: connectRouter(history),
		Books
	});
