import React, {useState} from 'react';
import {
	PaginationContainer,
	CurrentPageContainer,
	TotalPages,
	Next,
	Prev
} from './style';

export const Pagination = ({totalPages, bookPerPage, paginate, currentPage}) => {
	const pageNumber = [];
	for (let i = 1; i <= Math.ceil(totalPages/ bookPerPage); i++) {
		pageNumber.push(i);
	}
	const changePageNumber = (p) => {
		let page = p;
		if (page < 1) {
			page = 1;
		} else if (page > totalPages) {
			page = totalPages;
		}
		paginate(page);
	};
	return (
		<PaginationContainer>
			<CurrentPageContainer>
				{currentPage}
			</CurrentPageContainer>
			<TotalPages>از{' '}{totalPages}</TotalPages>
			<Next>
				<i
					className="flaticon-fast-forward"
					onClick={() => changePageNumber(currentPage - 1)}
				/>
			</Next>
			<Prev>
				<i
					className="flaticon-rewind"
					onClick={() => changePageNumber(currentPage + 1)}
				/>
			</Prev>
		</PaginationContainer>
	);
};

