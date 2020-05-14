import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100%;
	height: 180px;
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	@media only screen and (max-width: 767px) {
		justify-content: center;
		align-items: center;
  }
`;