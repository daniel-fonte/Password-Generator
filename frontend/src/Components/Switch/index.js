import React from 'react';

import PropTypes from 'prop-types';

import Container from './styles';

const Switch = (props) => {
	const { alteredTheme } = props;

	function setTheme(boolean) {
		if (boolean === true) {
			alteredTheme({ mode: 'dark' });
		}
		if (boolean === false) {
			alteredTheme({ mode: 'light' });
		}
	}

	return (
		<Container>
			<label htmlFor="switch">
				<input
					type="checkbox"
					id="switch"
					onChange={(event) => setTheme(event.target.checked)}

				/>
				<span className="slider" />
				<img
					src="https://img.icons8.com/emoji/30/000000/sun-emoji.png"
					alt="light theme icon"
					className="sunIcon"
				/>
				<img
					src="https://img.icons8.com/dusk/30/000000/new-moon.png"
					alt="dark theme icon"
					className="moonIcon"
				/>
			</label>
		</Container>
	);
};

Switch.propTypes = {
	alteredTheme: PropTypes.func,
};


export default Switch;
