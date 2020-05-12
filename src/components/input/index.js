import React from 'react';
import {InputContainer, Label, Input} from './style';

export default (props) => {
	const {label, ...other} = props;
	return (
		<InputContainer>
			{(label) &&
				<Label>
					<label htmlFor={other.id}>{label}</label>
				</Label>
			}
			<Input>
				<input {...other}/>
			</Input>
		</InputContainer>
	);
};