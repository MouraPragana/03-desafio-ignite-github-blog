import { useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'

interface FetchIssuesProps {
	profile: string
	repo: string
}

interface FetchIssuesInterface {
	total_count: number
	items: {
		id: number
		body: string
		title: string
	}[]
}

export function useIssues({ profile, repo }: FetchIssuesProps) {
	const [issues, setIssues] = useState<FetchIssuesInterface>()

	const fetchIssues = useCallback(
		async (query = '') => {
			await api
				.get<FetchIssuesInterface>('/search/issues', {
					params: {
						q: `${query} repo:${profile}/${repo}`,
					},
				})
				.then((response) => {
					setIssues(response.data)
				})
				.catch(() => {
					console.log('error')
				})
		},
		[profile, repo],
	)

	const filterNewIssues = useCallback(
		(query: string) => {
			fetchIssues(query)
		},
		[fetchIssues],
	)

	useEffect(() => {
		fetchIssues()
	}, [fetchIssues])

	return { issues, filterNewIssues }
}
