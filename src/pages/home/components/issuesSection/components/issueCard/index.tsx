import { Body, Header, Info, IssueCardStyle, Title } from './styles'

interface IssueCardProps {
	title: string
	body: string
}

export function IssueCard({ title, body }: IssueCardProps) {
	function cutBodyText() {
		return body.length >= 200 ? `${body.substring(0, 200)}...` : body
	}

	return (
		<IssueCardStyle>
			<Header>
				<Title>{title}</Title>
				<Info>Há 1 dia</Info>
			</Header>
			<Body>{cutBodyText()}</Body>
		</IssueCardStyle>
	)
}
