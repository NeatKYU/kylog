import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	${reset}

	* {
		box-sizing: border-box;
	}

	.f {
		display: flex;
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
	.ai-center {
		align-items: center;
	}

	.font-20 {
		font-size: 20px;
	}

	.font-18 {
		font-size: 18px;
	}

	.font-16 {
		font-size: 16px;
	}

	.font-12 {
		font-size: 12px;
	}
`

export default GlobalStyle;