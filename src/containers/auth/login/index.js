import React, {Component} from 'react';
import { LoginContainer, FormContainer } from './style';
import Input from "../../../components/input";
import Button from "../../../components/button";

class Index extends Component {
	render() {
		return (
			<LoginContainer>
				<FormContainer>
					<Input
						label='آدرس ایمیل'
						type='email'
						name='email'
						id='email'
					/>
					<Input
						label='رمز عبور (حداقل ۶ حرف)'
						type='password'
						name='password'
						id='password'
					/>
					<Button onClick={() => false}>ورود</Button>
				</FormContainer>
			</LoginContainer>
		);
	}
}

export default Index;