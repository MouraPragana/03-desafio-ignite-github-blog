import { LinearProgress } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { GithubBlogContext } from '../../../../context/profileContext'
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

	const issues = useContextSelector(GithubBlogContext, (context) => {
		return context.issues
	})

	const issuesLoadStatus = useContextSelector(GithubBlogContext, (context) => {
		return context.issuesLoadStatus
	})

	const fetchIssues = useContextSelector(GithubBlogContext, (context) => {
		return context.fetchIssues
	})

	useEffect(() => {
		fetchIssues('')
	}, [fetchIssues])

	// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
	// https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
	function handleInputTyping(e: ChangeEvent<HTMLInputElement>) {
		clearTimeout(timer)
		const newTimer = setTimeout(() => {
			fetchIssues(e.target.value)
		}, 700)
		setTimer(newTimer)
	}

	return (
		<IssuesContent>
			<IssuesHeader>
				<div>
					<HeaderTitle>Publicações</HeaderTitle>
					<HeaderInfo>
						{issues && issues.total_count > 1
							? issues.total_count + ' publicações'
							: issues && issues.total_count + ' publicação'}
					</HeaderInfo>
				</div>
				<input
					type="text"
					placeholder="Buscar conteúdo"
					onChange={handleInputTyping}
					disabled={issuesLoadStatus === 'loading'}
				/>
			</IssuesHeader>
			{issuesLoadStatus === 'loading' && (
				<LinearProgress sx={{ marginTop: '20px' }} />
			)}
			<IssuesBody>
				{issues &&
					issues.items.map((issue) => {
						return (
							<IssueCardContainer to={`/post/${issue.number}`} key={issue.id}>
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
