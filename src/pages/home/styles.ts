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

export const ProfileCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: stretch;

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
	justify-content: space-between;
	padding: 8px 0 0 0;
	flex: 1;

	> div {
		display: flex;
		justify-content: space-between;

		> a {
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
		}

		> h2 {
			color: ${(props) => props.theme['blue-50']};
			font-weight: bold;
			line-height: 1.3;
			font-size: 1.5rem;
		}
	}

	> span {
		color: ${(props) => props.theme['blue-200']};
		line-height: 1.6;
		margin-top: 8px;
		flex: 1;
	}
`

export const SocialContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	max-width: 393px;
	width: 100%;

	> span {
		display: flex;
		color: ${(props) => props.theme['blue-200']};
		line-height: 1.6;
		align-items: center;
		> svg {
			margin-right: 8.56px;
			color: ${(props) => props.theme['blue-400']};
		}
	}
`