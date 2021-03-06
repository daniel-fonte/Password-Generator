import { css } from 'styled-components';
import theming from 'styled-theming';

const themes = theming('mode', {
	dark: css`
		background-color: #212121;
		color: #fff;

		button {
			background-color: #4caf50 !important;
			color: #fff;
		}
	`,
	ligth: css`
		background-color: #fff;
		color: #000;

	`,
});

export default themes;
