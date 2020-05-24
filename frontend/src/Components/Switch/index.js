import React from 'react';

import Container from './styles';

export default function Switch() {
	return (
		<Container>
			<label htmlFor="switch">
				<input type="checkbox" id="switch" />
				<span className="slider" />
			</label>
		</Container>
	);
}
