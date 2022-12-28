import { LinearProgress } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useIssues } from '../../../../hooks/useIssues'
import { IssueCard } from './components/issueCard'
import {
	HeaderInfo,
	HeaderTitle,
	IssueCardContainer,
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
		}, 700)
		setTimer(newTimer)
	}

	return (
		<IssuesContent>
			<IssuesHeader>
				<div>
					<HeaderTitle>Publicações</HeaderTitle>
					<HeaderInfo>
						{issues.data && issues.data.total_count > 1
							? issues.data.total_count + ' publicações'
							: issues.data && issues.data.total_count + ' publicação'}
					</HeaderInfo>
				</div>
				<input
					type="text"
					placeholder="Buscar conteúdo"
					onChange={handleInputTyping}
					disabled={issues.status === 'loading'}
				/>
			</IssuesHeader>
			{issues.status === 'loading' && (
				<LinearProgress sx={{ marginTop: '20px' }} />
			)}
			<IssuesBody>
				{issues.data &&
					issues.data.items.map((issue) => {
						return (
							<IssueCardContainer to={`/post/${issue.id}`} key={issue.id}>
								<IssueCard
									title={issue.title}
									body={issue.body}
									created_at={issue.created_at}
								/>
							</IssueCardContainer>
						)
					})}
			</IssuesBody>
		</IssuesContent>
	)
}
