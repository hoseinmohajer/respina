import React from 'react';
import { NotFoundContainer } from './style';

export const NotFound = () => {
	return (
		<NotFoundContainer>
			<i className="exclamation"/>
			<h1>404</h1>
			<h3>Not found</h3>
		</NotFoundContainer>
	);
};