import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Switch from './Components/Switch';
import Container from './Styles/App';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
	const [theme, setTheme] = useState({});
	return (
		<>
			<Switch alteredTheme={setTheme} />
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Container />
			</ThemeProvider>
		</>
	);
}

export default App;
