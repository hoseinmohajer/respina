import React, { lazy } from "react";
const Login = lazy(() => import('../containers/auth/login'));

const routes = [
	{
		path:'/login',
		component: Login,
		layout:'public',
		visibility: 'public'
	},
];
export default routes;
