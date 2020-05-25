import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import Switch from './Components/Switch';
import api from './Services/api';
import Container from './Styles/App';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
	const [theme, setTheme] = useState({});
	const [password, setPassword] = useState('');
	const [lengthInput, setLengthInput] = useState(10);
	const [uppercaseInput, setUppercaseInput] = useState(false);
	const [numbersInput, setNumbersInput] = useState(false);
	const [symbolsInput, setSymbolsInput] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		api.post('/', {
			Length: lengthInput,
			Uppercase: uppercaseInput,
			Numbers: numbersInput,
			Symbols: symbolsInput,
		})
			.then((res) => setPassword(res.data.password))
			.catch(() => setPassword('Error: Try Again'));
	}

	return (
		<>
			<Switch alteredTheme={setTheme} />
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Container>
					<div className="passwordBox">
						<h1>Password Generator</h1>
						<input type="text" placeholder="Password" value={password} />
					</div>
					<div className="passwordOptions">
						<form onSubmit={(event) => handleSubmit(event)} className="passwordForm">
							<div className="option">
								<label htmlFor="length" className="length">
									<input
										type="number"
										id="length"
										placeholder="Password Length"
										value={lengthInput}
										onChange={(event) => setLengthInput(event.target.value)}
										required
									/>
								</label>
							</div>
							<div className="option">
								<label htmlFor="uppercase" className="label-checkbox">
									<input
										type="radio"
										id="uppercase"
										name="checkbox"
										defaultChecked={uppercaseInput}
										onChange={(event) => setUppercaseInput(event.target.checked)}
									/>
									<span className="checkbox-shadow" />
								</label>
								<h3>Include Uppercase Letters</h3>
							</div>
							<div className="option">
								<label htmlFor="numbers" className="label-checkbox">
									<input
										type="radio"
										id="numbers"
										name="checkbox"
										defaultChecked={numbersInput}
										onChange={(event) => setNumbersInput(event.target.checked)}
									/>
									<span className="checkbox-shadow" />

								</label>
								<h3>Include Numbers</h3>
							</div>
							<div className="option">
								<label htmlFor="symbols" className="label-checkbox">
									<input
										type="radio"
										id="symbols"
										name="checkbox"
										defaultChecked={symbolsInput}
										onChange={(event) => setSymbolsInput(event.target.checked)}
									/>
									<span className="checkbox-shadow" />
								</label>
								<h3>Include Symbols</h3>
							</div>
							<button type="submit">Generate</button>
						</form>
					</div>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
