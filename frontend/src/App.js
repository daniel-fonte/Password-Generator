import React from 'react';

import { ThemeProvider } from 'styled-components';

import Container from './Styles/App';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
	return (
		<ThemeProvider theme={{ mode: 'light' }}>
			<GlobalStyles />
			<Container>
				<h1>oi</h1>
			</Container>
		</ThemeProvider>
	);
}

export default App;
