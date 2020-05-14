import React, {useState} from 'react';
import {SidebarContainer, Title, Categories, Row, Wrapper} from './style';
import {CheckBox} from "../../../../../../components/checkbox";

export const SideBar = (props) => {
	const [active, menuToggle] = useState(false);
	return (
		<Wrapper>
			<div className='side-bar-button'>
				<i onClick={() => menuToggle(!active)} className="flaticon-menu-2"/>
			</div>
			<SidebarContainer status={active}>
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
		</Wrapper>
	);
}