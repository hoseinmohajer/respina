import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Route } from 'react-router-dom';
import { GlobalStyle } from "./style";
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router";
import routes from "../../routes";
import Public from '../../layouts/public';
import Authorized from '../../layouts/authorized';
import { history } from "../../configureStore";
import { NotFound } from "../../components/notFound";
import Login from "../auth/login";

class Index extends Component {
	layoutManage(item, key) {
		switch (item.layout) {
			case "public":
				return (
					<Route
						key={key}
						exact
						path={item.path}
						render={route => (
							<Public
								route={route}
								Component={item.component}
								options={item.options || {}}
							/>
						)}
					/>
				);
			case "authorized":
				return (
					<Route
						key={key}
						exact
						path={item.path}
						render={route => (
							<Authorized
								route={route}
								Component={item.component}
								options={item.options || {}}
							/>
						)}
					/>
				);
			default:
				return (
					<Route
						key={key}
						exact
						path={item.path}
						component={item.component}
						options={item.options || {}}
					/>
				);
		}
	}
	switchRoutes() {
		console.log(this.props.authData);
		if (sessionStorage.getItem('loggedIn') || (this.props.authData.length !== 0)) {
			return routes.map((route, key) => {
				return this.layoutManage(route, key);
			});
		} else {
			return (
				<Route
					exact
					path="/*"
					render={route => (
						<Public route={route} Component={Login} />
					)}
				/>
			);
		}
	}
	render() {
		return (
			<ConnectedRouter history={history}>
				<GlobalStyle />
				<Switch>
					{this.switchRoutes()}
					<Route component={NotFound}/>
				</Switch>
			</ConnectedRouter>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		authData: store.Auth.data
	}
};

export default connect(mapStateToProps)(Index);