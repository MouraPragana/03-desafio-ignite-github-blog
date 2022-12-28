import { useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'

interface IFetchIssuesStatus {
	status: 'loading' | 'loaded' | 'error'
}

interface IFetchIssuesProps {
	profile: string
	repo: string
}

interface IAxiosData {
	total_count: number
	items: {
		id: number
		body: string
		title: string
		created_at: string
	}[]
}

interface IIssuesInterface extends IFetchIssuesStatus {
	data?: IAxiosData
}

export function useIssues({ profile, repo }: IFetchIssuesProps) {
	const [issues, setIssues] = useState<IIssuesInterface>({ status: 'loading' })

	const fetchIssues = useCallback(
		async (query = '') => {
			setIssues({ status: 'loading' })

			// Aumentar tempo para buscar o retorno, mostrar o linear progress.
			await new Promise((resolve) => setTimeout(resolve, 1000))

			await api
				.get<IAxiosData>('/search/issues', {
					params: {
						q: `${query} repo:${profile}/${repo}`,
					},
				})
				.then((response) => {
					setIssues({ data: response.data, status: 'loaded' })
				})
				.catch(() => setIssues({ status: 'error' }))
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
