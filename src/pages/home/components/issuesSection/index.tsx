import { LinearProgress } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { GithubBlogContext } from '../../../../context/githubBlogContext'
import { IssueCard } from './components/issueCard'
import {
	HeaderInfo,
	HeaderTitle,
	IssueCardContainer,
	IssuesBody,
	IssuesContent,
	IssuesHeader,
	ReloadButton,
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

	const fraseDePublicações = () => {
		return issues && issues.total_count > 1
			? `${issues.total_count} publicações`
			: issues && issues.total_count === 1
			? `${issues.total_count} publicação`
			: 'Nenhuma publicação'
	}

	const isInputDisabled = () => {
		return !!(issuesLoadStatus === 'loading' || issuesLoadStatus === 'error')
	}

	const inputPlaceholder = () => {
		return issuesLoadStatus === 'error'
			? 'Recarregue a aplicação'
			: 'Buscar conteúdo'
	}

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
					<HeaderInfo>{fraseDePublicações()}</HeaderInfo>
				</div>
				<input
					type="text"
					placeholder={inputPlaceholder()}
					onChange={handleInputTyping}
					disabled={isInputDisabled()}
				/>
			</IssuesHeader>

			{issuesLoadStatus === 'loading' && (
				<LinearProgress sx={{ marginTop: '20px' }} />
			)}

			{issuesLoadStatus === 'error' && (
				<ReloadButton onClick={() => fetchIssues('')}>
					Clique aqui para tentar novamente ou recarregue a página.
				</ReloadButton>
			)}

			<IssuesBody>
				{issues &&
					issuesLoadStatus === 'loaded' &&
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
