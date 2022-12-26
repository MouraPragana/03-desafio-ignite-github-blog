import { ChangeEvent, useState } from 'react'
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
	const [timer, setTimer] = useState(0)

	const { issues, filterNewIssues } = useIssues({
		profile: 'MouraPragana',
		repo: '03-desafio-ignite-github-blog',
	})

	// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
	// https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
	function handleInputTyping(e: ChangeEvent<HTMLInputElement>) {
		clearTimeout(timer)
		const newTimer = setTimeout(() => {
			filterNewIssues(e.target.value)
		}, 1200)
		setTimer(newTimer)
	}

	return (
		<IssuesContent>
			<IssuesHeader>
				<div>
					<HeaderTitle>Publicações</HeaderTitle>
					<HeaderInfo>
						{issues && issues?.total_count > 1
							? issues?.total_count + ' publicações'
							: issues?.total_count + ' publicação'}
					</HeaderInfo>
				</div>
				<input
					type="text"
					placeholder="Buscar conteúdo"
					onChange={handleInputTyping}
				/>
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
