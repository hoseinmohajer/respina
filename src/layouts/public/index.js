import React, {Component, Suspense} from 'react';
import {PublicContainer, GlobalStyle} from './style';
import { Spinner } from '../../components/spinner';

class Public extends Component {
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
				<GlobalStyle/>
				<PublicContainer>
					<Suspense fallback={<Spinner/>}>
						<Component route={route}/>
					</Suspense>
				</PublicContainer>
			</React.Fragment>
		);
	}
}

export default Public;