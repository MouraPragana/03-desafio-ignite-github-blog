import { IssueCard } from './components/issueCard'
import {
	HeaderInfo,
	HeaderTitle,
	IssuesBody,
	IssuesHeader,
	IssuesContent,
} from './styles'

export function IssuesSection() {
	return (
		<IssuesContent>
			<IssuesHeader>
				<div>
					<HeaderTitle>Publicações</HeaderTitle>
					<HeaderInfo>6 publicações</HeaderInfo>
				</div>
				<input type="text" placeholder="Buscar conteúdo" />
			</IssuesHeader>
			<IssuesBody>
				<IssueCard />
				<IssueCard />
				<IssueCard />
			</IssuesBody>
		</IssuesContent>
	)
}
