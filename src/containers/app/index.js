import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { Switch } from "react-router";
import routes from "../../routes";
import Public from '../../layouts/public';
import Authorized from '../../layouts/authorized';
import { NotFound } from "../../components/notFound";
import { history } from "../../configureStore";

class Index extends Component {
	layoutManage(item, key) {
		console.log(item.layout);
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
		return routes.map((route, key) => {
			return this.layoutManage(route, key);
		});
	}
	render() {
		return (
			<ConnectedRouter history={history}>
				<Switch>
					{this.switchRoutes()}
					<Route component={NotFound}/>
				</Switch>
			</ConnectedRouter>
		);
	}
}

export default Index;