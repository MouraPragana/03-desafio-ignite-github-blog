import styled from 'styled-components'

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;
	min-height: calc(100vh - 296px);
	height: 100%;
	width: 100%;
	background: ${(props) => props.theme['blue-800']};
`
