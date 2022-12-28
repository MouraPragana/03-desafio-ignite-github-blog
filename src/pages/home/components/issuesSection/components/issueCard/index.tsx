import ptBR from 'date-fns/locale/pt-BR'
import {
	cutString,
	formatDateDistanceFromNow,
} from '../../../../../../utils/formatter'
import { Body, Header, Info, IssueCardStyle, Title } from './styles'

interface IssueCardProps {
	title: string
	body: string
	created_at: string
}

export function IssueCard({ title, body, created_at }: IssueCardProps) {
	const bodyText = cutString(body)
	const timeFromNow = formatDateDistanceFromNow(created_at, ptBR)

	return (
		<IssueCardStyle>
			<Header>
				<Title>{title}</Title>
				<Info>{timeFromNow}</Info>
			</Header>
			<Body>{bodyText}</Body>
		</IssueCardStyle>
	)
}
