import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as bookAction from '../../actions/book';
import {Header} from './components/header';
import {Banner} from './components/banner';
import {Body} from './components/body';
import {Footer} from "./components/footer";
import {withRouter} from "react-router";

class Index extends Component {
	componentDidMount() {
		this.props.getList();
	}

	render() {
		const {bookList} = this.props;
		return (
			<React.Fragment>
				<Header/>
				<Banner/>
				<Body data={bookList}/>
				<Footer/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		loading: store.Books.loading,
		bookList: store.Books.data,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getList: () => {
			dispatch(bookAction.getBookList());
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));