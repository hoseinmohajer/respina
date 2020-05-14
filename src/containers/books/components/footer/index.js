import React from 'react';
import {FooterContainer} from './style';
import {Pagination} from "../../../../components/pagination";

export const Footer = (props) => {
	return (
		<FooterContainer>
			<Pagination
				totalPages={props.totalPages}
				bookPerPage={props.bookPerPage}
				paginate={props.paginate}
				currentPage={props.currentPage}
			/>
		</FooterContainer>
	);
};