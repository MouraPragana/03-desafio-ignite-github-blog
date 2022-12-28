import styled from 'styled-components'

export const ProfileCard = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	padding: 32px 32px 32px 40px;

	gap: 32px;

	background: ${(props) => props.theme['blue-700']};
	margin-top: -88px;
	max-width: 864px;
	width: 100%;
	min-height: 212px;
	height: 100%;
	border-radius: 10px;

	img {
		height: 148px;
		width: 148px;
		border-radius: 8px;
	}
`
export const TextContent = styled.div`
	display: flex;
	flex-direction: column;

	padding: 8px 0 0 0;
	flex: 1;
`

export const TextContentHeader = styled.div`
	display: flex;
	justify-content: space-between;
`

export const TextContentTitle = styled.h2`
	color: ${(props) => props.theme['blue-50']};
	font-weight: bold;
	line-height: 1.3;
	font-size: 1.5rem;
`

export const TextContentLink = styled.a`
	display: flex;
	align-items: center;
	gap: 8.36px;
	color: ${(props) => props.theme.brand};
	text-transform: uppercase;
	line-height: 1.6;
	font-size: 0.75rem;
	font-weight: bold;
	text-decoration: none;
	height: 20px;
	border-bottom: 1px solid transparent;
	transition: border 0.2s;
	&:hover {
		border-bottom: 1px solid ${(props) => props.theme.brand};
	}
	> svg {
		height: 20px;
	}
`

export const SkeletonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	> p {
		color: ${(props) => props.theme.brand};
		font-weight: bold;
		margin-bottom: 1.5rem;
	}

	> span {
		color: ${(props) => props.theme.brand};
	}
`

export const TextContentBody = styled.span`
	color: ${(props) => props.theme['blue-200']};
	line-height: 1.6;
	margin-top: 8px;
`

export const SocialContent = styled.div`
	display: flex;
	flex-direction: row;

	margin-top: 28px;
	gap: 24px;
	flex-wrap: wrap;

	div {
		display: flex;
		max-height: 26px;
		height: 100%;
		align-items: center;

		svg {
			margin-right: 8px;
			color: ${(props) => props.theme['blue-400']};
		}

		span {
			color: ${(props) => props.theme['blue-200']};
		}
	}
`
