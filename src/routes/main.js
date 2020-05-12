import React, { lazy } from "react";
const Login = lazy(() => import('../containers/auth/login'));
const Register = lazy(() => import('../containers/auth/register'));

const routes = [
	{
		path:'/login',
		component: Login,
		layout:'public',
		visibility: 'public'
	},
	{
		path:'/register',
		component: Register,
		layout:'public',
		visibility: 'public'
	}
];
export default routes;
