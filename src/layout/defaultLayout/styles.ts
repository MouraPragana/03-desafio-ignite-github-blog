import styled from 'styled-components'
import headerBackground from '../../assets/headerBackground.svg'

export const PageContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1440px;
	width: 100%;
	margin: 0 auto;
`

export const Header = styled.header`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	background: url(${headerBackground}) no-repeat center;
	width: 100%;
	height: 296px;

	img {
		margin-top: 64px;
	}
`

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;
	min-height: calc(100vh - 296px);
	height: 100%;
	width: 100%;
	background: ${(props) => props.theme['blue-800']};
`
