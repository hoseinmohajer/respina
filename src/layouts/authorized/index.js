import React, {Component, Suspense} from 'react';
import {AuthorizedContainer} from './style';
import { Spinner } from '../../components/spinner';

class Authorized extends Component {
	componentDidMount() {
		let meta = document.createElement("meta");
		meta.name = "viewport";
		meta.content = "width=device-width, initial-scale=1";
		document.getElementsByTagName("head")[0].appendChild(meta);
	}
	render() {
		const {Component, route} = this.props;
		return (
			<React.Fragment>
				<AuthorizedContainer>
					<div className="inner-container">
						<Suspense fallback={<Spinner/>}>
							<Component route={route}/>
						</Suspense>
					</div>
				</AuthorizedContainer>
			</React.Fragment>
		);
	}
}

export default Authorized;