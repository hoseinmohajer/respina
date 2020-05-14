import React from 'react';
import {BodyContainer} from './style';
import {SideBar} from "./components/sidebar";
import {Bookcase} from "./components/bookcase";

export const Body = (props) => {
	return (
		<BodyContainer>
			<SideBar
				categories={props.categories}
				onSelect={(id) => props.onSelect(id)}
			/>
			<Bookcase data={props.data}/>
		</BodyContainer>
	);
};