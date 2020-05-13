import React from 'react';
import {SidebarContainer, Title, Categories} from './style';
import {CheckBox} from "../../../../../../components/checkbox";

export const SideBar = (props) => {
	const iterator = props.data.map(item => item.category).values();
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	console.log(iterator.next().value);
	return (
		<SidebarContainer>
			<Title>دسته بندی</Title>
			<Categories>
				<CheckBox checked={false} >book name</CheckBox>
			</Categories>
		</SidebarContainer>
	);
}