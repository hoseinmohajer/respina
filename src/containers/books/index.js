import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as bookAction from '../../actions/book';
import {Header} from './components/header';
import {Banner} from './components/banner';
import {Body} from './components/body';
import {Footer} from "./components/footer";
import {withRouter} from "react-router";
import {CATEGORIES} from "../../constants/categories";

const Index = (props) => {
	const { getList, bookList } = props;
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(8);
	const [books, setBooks] = useState(bookList);
	useEffect(() => {
		getList();
		setBooks(bookList);
	}, [getList, bookList]);

	// Filter the page
	const [categories, setCategories] = useState(CATEGORIES);
	const onSelect = (id) => {
		let data = [];
		CATEGORIES.forEach((item) => {
			if (item.id === id) {
				item.checked = !item.checked
			}
			data.push(item);
		});
		const filterIds = data.filter((item) => (item.checked)).map((item) => item.id);
		if (filterIds.length !== 0) {
			const filteredData = bookList.filter( (item) => filterIds.indexOf(parseInt(item.category)) !== -1 );
			setBooks(filteredData);
			paginate(1);
		} else {
			setBooks(bookList);
			paginate(1);
		}
		setCategories(data);
	};

	// Get current page
	const indexOfLastPage = currentPage * booksPerPage;
	const indexOfFirstPage = indexOfLastPage - booksPerPage;
	const currentPageBooks = books.slice(indexOfFirstPage, indexOfLastPage);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	console.log(currentPage);
	return (
		<React.Fragment>
			<Header/>
			<Banner/>
			<Body
				data={currentPageBooks}
				categories={categories}
				onSelect={(id) => onSelect(id)}
			/>
			<Footer
				totalPages={books.length}
				bookPerPage={booksPerPage}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</React.Fragment>
	);
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