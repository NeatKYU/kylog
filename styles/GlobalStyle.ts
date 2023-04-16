import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '@/styles/theme';
import { toRem } from '@/lib/helper';

const laptop = theme.device.laptop;
const tablet = theme.device.tablet;
const semiTablet = theme.device.semiTablet;

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

	.bold {
		font-weight: bold;
	}

	.gap-1 {
		gap: 1rem;
	}

	.title-font-size {
		@media ${laptop} {
			font-size: ${toRem(30)};
		}
		@media ${tablet} {
			font-size: ${toRem(20)};
		}
		@media ${semiTablet} {
			font-size: ${toRem(18)};
		}
	}
`

export default GlobalStyle;