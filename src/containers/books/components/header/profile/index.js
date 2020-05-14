import React from 'react';
import {ProfileContainer, UserName} from './style';

export const Profile = (props) => {
	return (
		<ProfileContainer>
			<i className="profile-icon flaticon-user"/>
			<UserName>
				{JSON.parse(sessionStorage.getItem('userInfo')).email}
			</UserName>
		</ProfileContainer>
	);
};