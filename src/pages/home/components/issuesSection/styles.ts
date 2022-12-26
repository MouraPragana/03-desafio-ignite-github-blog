import styled from 'styled-components'

export const IssuesContent = styled.div`
	max-width: 864px;
	width: 100%;
	margin-top: 72px;
`

export const IssuesHeader = styled.div`
	display: flex;
	flex-direction: column;

	> div {
		display: flex;
		justify-content: space-between;
	}

	> input {
		margin-top: 12px;
		border: none;
		border: 1px solid ${(props) => props.theme['blue-500']};
		border-radius: 6px;
		padding: 12px 16px 12px 16px;
		color: ${(props) => props.theme['blue-400']};

		&::placeholder {
			color: ${(props) => props.theme['blue-400']};
		}
	}
`

export const HeaderTitle = styled.span`
	color: ${(props) => props.theme['blue-100']};
	font-size: 1.125rem;
	line-height: 1.6;
	font-weight: bold;
`

export const HeaderInfo = styled.span`
	font-size: 0.875rem;
	line-height: 1.6;
	color: ${(props) => props.theme['blue-300']};
`

export const IssuesBody = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 416px);
	gap: 32px;
	margin-top: 48px;
	margin-bottom: 48px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`
