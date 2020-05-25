import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	margin: 50px auto;

	.passwordBox {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.passwordBox h1 {
		font-size: 30px;
		font-weight: bold;
	}

	.passwordLine {
		width: 80%;
		display: flex;
		flex-direction: row;
	}

	.passwordLine input {
		width: 100%;
		border: 1px solid #000;
		border-radius: 10px;
		padding: 10px;
		margin-top: 10px;
	}

	.passwordLine button {
		cursor: pointer;
		background-color: #03a9f4;
		border-radius: 5px;
		border: 1px solid #000;
		margin-left: 10px;
		padding: 5px;
	}

	.passwordOptions {
		width: 100%;
		margin-top: 30px;
	}

	.passwordForm {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-row-gap: 10px;
		grid-column-gap: 10px;
	}

	.option {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
	}

	.option h3 {
		text-transform: uppercase;
		font-size: 10pt;
	}

	label.length {
		width: 80%;
	}

	label.length input[type = number] {
		width: 50%;
		border: 1px solid #000;
		border-radius: 5px;
		padding: 5px;
	}

	label.label-checkbox {
		cursor: pointer;
		display: inline-block;
		position: relative;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1px solid #000;
		margin-right: 10px;
	}

	input[type = radio] {
		visibility: hidden;
	}

	span.checkbox-shadow {
		display: block;
		position: absolute;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #000;
		top: 4px;
		left: 4px;
		opacity: 0;
		transition: all .4s;
	}

	input[type = radio]:checked + span.checkbox-shadow {
		opacity: 1;
	}

	label.label-checkbox div {
		width: 200px;
		background-color: red;
		display: flex;
		flex-direction: row;
		margin-left: 10px;
	}

	button[type = submit] {
		cursor: pointer;
		margin-top: 10px;
		border: 1px solid #000;
		width: 50%;
		padding: 5px;
		font-weight: bold;
		font-size: 20px;
		border-radius: 5px;
		background-color: #a1ff00;
	}

	input[type = text], button {
		box-shadow: 2px 2px 4px #000;
	}
`;

export default Container;
