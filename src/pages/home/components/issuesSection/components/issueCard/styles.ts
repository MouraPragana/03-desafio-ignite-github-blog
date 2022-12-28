import styled from 'styled-components'

export const IssueCardStyle = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 260px;
	height: 100%;
	background: ${(props) => props.theme['blue-600']};
	border-radius: 10px;
	padding: 32px;
	cursor: pointer;

	&:hover {
		outline: 1px solid ${(props) => props.theme['blue-400']};
		scale: 1.01;
		transition: all 0.1s ease-in;
	}
`

export const Header = styled.div`
	display: flex;
`

export const Title = styled.span`
	display: flex;
	flex: 1;
	font-weight: bold;
	line-height: 1.6;
	font-size: 1.25rem;
	max-width: 283px;
	width: 100%;
	color: ${(props) => props.theme['blue-50']};

	@media screen and (max-width: 768px) {
		font-size: 1.1rem;
	}
`

export const Info = styled.span`
	line-height: 1.6;
	font-size: 0.875rem;
	color: ${(props) => props.theme['blue-300']};
	width: fit-content;
`

export const Body = styled.span`
	margin-top: 20px;
	color: ${(props) => props.theme['blue-200']};
	line-height: 25.6px;
`
