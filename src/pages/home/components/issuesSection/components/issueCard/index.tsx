import { Body, Header, Info, IssueCardStyle, Title } from './styles'

export function IssueCard() {
	return (
		<IssueCardStyle>
			<Header>
				<Title>JavaScript data types and data structures</Title>
				<Info>Há 1 dia</Info>
			</Header>
			<Body>
				Programming languages all have build-in data structures, but these often
				dinner from one language to another. This article attempts to list the
				build-in data structures available in...
			</Body>
		</IssueCardStyle>
	)
}
