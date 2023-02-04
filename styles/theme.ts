import { toRem } from "@/lib/helper";

const colors = {
	black: '#242424',
	hoverBlack: '#2c2c2c',
	white: '#eeeeee',
	hoverWhite: '#d0d0d0',
	grey: '#c2c2c2',

	backgroundColor: '#474747',
}

const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
	colors,
	device,
}

export default theme;