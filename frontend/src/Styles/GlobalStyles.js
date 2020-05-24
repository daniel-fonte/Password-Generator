import { createGlobalStyle } from 'styled-components';

import Themes from './Themes';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	body {
		font-family: 'Roboto', sans-serif;
		${Themes};
	}
`;

export default GlobalStyles;
