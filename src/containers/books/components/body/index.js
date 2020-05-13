import React from 'react';
import {BodyContainer} from './style';
import {SideBar} from "./components/sidebar";

export const Body = (props) => {
	return (
		<BodyContainer>
			<SideBar data={props.data}/>
		</BodyContainer>
	);
};