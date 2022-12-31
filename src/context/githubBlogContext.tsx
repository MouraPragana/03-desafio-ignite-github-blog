import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IAxiosProfileData {
	avatar_url: string
	bio: string
	company: string
	followers: number
	name: string
	login: string
	html_url: string
}

interface IAxiosIssuesData {
	total_count: number
	items: {
		id: number
		body: string
		title: string
		created_at: string
		number: number
	}[]
}

interface IProfileInterface {
	profile?: IAxiosProfileData
	status: 'loading' | 'loaded' | 'error'
}

interface IIssuesInterface {
	issues?: IAxiosIssuesData
	status: 'loading' | 'loaded' | 'error'
}

interface GithubBlogContextType {
	profile?: IAxiosProfileData
	issues?: IAxiosIssuesData
	profileLoadStatus: 'loading' | 'loaded' | 'error'
	issuesLoadStatus: 'loading' | 'loaded' | 'error'
	fetchIssues: (query: string) => void
}

export const GithubBlogContext = createContext({} as GithubBlogContextType)

interface IProfileContextProvider {
	children: ReactNode
}

export function GithubBlogContextProvider({
	children,
}: IProfileContextProvider) {
	const [profileInfo, setProfileInfo] = useState<IProfileInterface>({
		status: 'loading',
	})

	const [issuesInfo, setIssuesInfo] = useState<IIssuesInterface>({
		status: 'loading',
	})

	const fetchDataProfile = useCallback(async () => {
		setProfileInfo({ status: 'loading' })
		// Aumentar tempo para buscar o retorno, mostrar o skeleton de loading.
		await new Promise((resolve) => setTimeout(resolve, 1000))
		await api
			.get<IAxiosProfileData>(`/users/MouraPragana`)
			.then((response) => {
				setProfileInfo({ profile: response.data, status: 'loaded' })
			})
			.catch(() => setProfileInfo({ status: 'error' }))
	}, [])

	const fetchIssues = useCallback(async (query = '') => {
		setIssuesInfo({ status: 'loading' })
		// Aumentar tempo para buscar o retorno, mostrar o linear progress.
		await new Promise((resolve) => setTimeout(resolve, 1000))
		await api
			.get<IAxiosIssuesData>('/search/issues', {
				params: {
					q: `${query} repo:MouraPragana/03-desafio-ignite-github-blog`,
				},
			})
			.then((response) => {
				setIssuesInfo({ issues: response.data, status: 'loaded' })
			})
			.catch(() => setIssuesInfo({ status: 'error' }))
	}, [])

	useEffect(() => {
		fetchDataProfile()
		fetchIssues()
	}, [fetchDataProfile, fetchIssues])

	return (
		<GithubBlogContext.Provider
			value={{
				profile: profileInfo.profile,
				profileLoadStatus: profileInfo.status,
				issues: issuesInfo.issues,
				issuesLoadStatus: issuesInfo.status,
				fetchIssues,
			}}
		>
			{children}
		</GithubBlogContext.Provider>
	)
}
