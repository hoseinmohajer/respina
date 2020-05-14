import React, {useReducer, useState} from 'react';
import { LoginContainer, FormContainer } from './style';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Input from "../../../components/input";
import Button from "../../../components/button";
import * as authAction from "../../../actions/auth";

export const Login = (props) => {
	const [passErr, setPassErr] = useState('');
	const [emailErr, setEmailErr] = useState('');
	const [value, setValue] = useReducer(
		(state, newState) => ({ ...state, ...newState }),
		{email: '', password: ''}
	);
	const changeHandler = event => {
		const { name, value } = event.target;
		setValue({ [name]: value });
		setEmailErr('');
		setPassErr('');
	};
	const submit = () => {
		if (value && value.email && value.password && value.password.length >= 6 && validateEmail(value.email)) {
			props.login(value);
		} else {
			if (!value.email) {
				setEmailErr('ایمیل اجباریست!');
			} else if (!validateEmail(value.email)) {
				setEmailErr('آدرس ایمیل وارد شده معتبر نمی باشد.');
			} else {
				setEmailErr('');
			}
			if (!value.password) {
				setPassErr('رمز عبور اجباریست!');
			} else if (value.password && value.password.length < 6) {
				setPassErr('رمز عبور وارد شده معتبر نمی باشد.');
			} else {
				setPassErr('');
			}
		}
	}
	return (
			<LoginContainer>
				<FormContainer>
					<Input
						label='آدرس ایمیل'
						type='email'
						name='email'
						id='email'
						value={value.email}
						onChange={changeHandler}
						error={emailErr}
					/>
					<Input
						label='رمز عبور (حداقل ۶ حرف)'
						type='password'
						name='password'
						id='password'
						value={value.password}
						onChange={changeHandler}
						error={passErr}
					/>
					<Button
						loading={props.loading}
						onClick={submit}
					>
						ورود
					</Button>
				</FormContainer>
			</LoginContainer>
		);
};

const validateEmail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

const mapStateToProps = (store) => {
	return {
		loading: store.Auth.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (data) => {
			dispatch(authAction.loginRequest(data));
		}
	}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));