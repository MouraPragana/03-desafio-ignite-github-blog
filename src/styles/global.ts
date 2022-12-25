import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body,
	input,
	button{
		font-family: 'Nunito', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		background: ${(props) => props.theme['blue-900']};
	}
`
