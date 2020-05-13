import React from 'react';
import {SidebarContainer, Title, Categories, Row} from './style';
import {CheckBox} from "../../../../../../components/checkbox";

export const SideBar = (props) => {

	return (
		<SidebarContainer>
			<Title>دسته بندی</Title>
			<Categories>
				{props.categories.map((category) => {
					return (
						<Row key={category.id}>
							<CheckBox
								checked={category.checked}
								onSelect={() => props.onSelect(category.id)}
							>
								{category.name}
							</CheckBox>
						</Row>
					);
				})}
			</Categories>
		</SidebarContainer>
	);
}