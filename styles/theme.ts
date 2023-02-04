import { toRem } from "@/lib/helper";

const colors = {
	black: '#242424',
	hoverBlack: '#2c2c2c',
	white: '#eeeeee',
	hoverWhite: '#d0d0d0',
	grey: '#c2c2c2',

	backgroundColor: '#474747',
}

const deviceFixSize = {
	mobile: 375,
	semiTablet: 578,
	tablet: 768,
	laptop: 1024,
}

const deviceSizes = {
  mobile: '400px',
	semiTablet: '590px',
  tablet: '790px',
  laptop: '1080px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	semiTablet: `screen and (max-width: ${deviceSizes.semiTablet})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
	colors,
	deviceFixSize,
	device,
}

export default theme;