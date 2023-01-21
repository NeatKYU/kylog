import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
		background-color: #474747;
	}
`

export default GlobalStyle;