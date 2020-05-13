import React, { lazy } from "react";
const Login = lazy(() => import('../containers/auth/login'));
const Books = lazy(() => import('../containers/books'));

const routes = [
	{
		path:'/login',
		component: Login,
		layout:'public',
		visibility: 'public'
	},
	{
		path:'/',
		component: Books,
		layout:'authorized',
		visibility: 'authorized'
	},
];
export default routes;
