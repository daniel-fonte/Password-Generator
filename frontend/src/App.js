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

	function handleSubmit(event) {
		const form = event.target;
		event.preventDefault();

		api.post('/', {
			Length: lengthInput,
			Uppercase: form[1].checked,
			Numbers: form[2].checked,
			Symbols: form[3].checked,
		}).then((res) => setPassword(res.data.password))
			.catch((err) => setPassword(err.message));
	}


	function copyToClipboard() {
		document.getElementById('password').select();
		document.execCommand('copy');
	}

	return (
		<>
			<Switch alteredTheme={setTheme} />
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Container>
					<div className="passwordBox">
						<h1>Password Generator</h1>
						<div className="passwordLine">
							<input
								type="text"
								placeholder="Password"
								value={password}
								id="password"
								readOnly
							/>
							{
								password !== '' ? (
									<button type="button" onClick={copyToClipboard}>
										<img src="https://img.icons8.com/metro/26/000000/clipboard.png" alt="Copy Icon" />
									</button>
								)
									: null
							}
						</div>
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
										min="3"
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
										defaultChecked
										value="uppercase"
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
										value="numbers"
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
										value="symbols"
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
