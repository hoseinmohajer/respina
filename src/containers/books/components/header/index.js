import React from 'react';
import {HeaderContainer} from './style';
import {Logo} from "./logo";
import {Profile} from "./profile";

export const Header = (props) => {
	return (
		<HeaderContainer>
			<Logo/>
			<Profile/>
		</HeaderContainer>
	);
};