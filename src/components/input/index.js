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
			{(inputProps.type === 'email' &&
				inputProps.value &&
				!validateEmail(inputProps.value) &&
				!error) &&
				<Error>آدرس ایمیل وارد شده معتبر نمی باشد.</Error>
			}
		</InputContainer>
	);
};

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};