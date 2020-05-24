import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 20px;
	right: 20px;

	label {
		cursor: pointer;
		display: inline-block;
		position: relative;
		width: 80px;
		height: 40px;
		border: 1px solid #000;
		border-radius: 40px;
		background-color: transparent;
	}

	input {
		visibility: hidden;
	}

	span.slider {
		content: '';
		position: absolute;
		display: block;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: #000;
		top: 1px;
		left: 2px;
		transition: all .4s;
	}

	input:checked + span {
		left: 40px ;
	}
`;

export default Container;
