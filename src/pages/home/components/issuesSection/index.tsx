import { useIssues } from '../../../../hooks/useIssues'
import { IssueCard } from './components/issueCard'
import {
	HeaderInfo,
	HeaderTitle,
	IssuesBody,
	IssuesContent,
	IssuesHeader,
} from './styles'

export function IssuesSection() {
	const { issues } = useIssues({
		profile: 'MouraPragana',
		repo: '03-desafio-ignite-github-blog',
	})

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
				{issues?.items.map((issue) => {
					return (
						<IssueCard key={issue.id} title={issue.title} body={issue.body} />
					)
				})}
			</IssuesBody>
		</IssuesContent>
	)
}
