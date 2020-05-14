import React from 'react';
import {InputContainer, Label, Input, Error} from './style';

export default (props) => {
	const {label, error, ...inputProps} = props;
	return (
		<InputContainer>
			{(label) &&
				<Label>
					<label htmlFor={inputProps.id}>{label}</label>
				</Label>
			}
			<Input error={error} type={inputProps.type}>
				<input {...inputProps}/>
			</Input>
			{(error) &&
				<Error>{error}</Error>
			}
		</InputContainer>
	);
};