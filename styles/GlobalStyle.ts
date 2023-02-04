import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
		background-color: #474747;
	}

	.fcenter {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.fcol {
		display: flex;
		flex-direction: column;
	}
	.jc-start {
		justify-content: start;
	}
	.jc-end {
		justify-content: end;
	}
	.ai-start {
		align-items: start;
	}
	.ai-end {
		align-items: end;
	}
`

export default GlobalStyle;