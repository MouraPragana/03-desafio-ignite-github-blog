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
