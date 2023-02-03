import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
		background-color: #474747;
	}

	.fc {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export default GlobalStyle;