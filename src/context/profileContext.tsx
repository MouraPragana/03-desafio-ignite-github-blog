import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IAxiosData {
	avatar_url: string
	bio: string
	company: string
	followers: number
	name: string
	login: string
	html_url: string
}

interface ProfileContextType {
	data?: IAxiosData
	status: 'loading' | 'loaded' | 'error'
}

export const ProfileContext = createContext({} as ProfileContextType)

interface IProfileContextProvider {
	children: ReactNode
}

export function ProfileContextProvider({ children }: IProfileContextProvider) {
	const [profile, setProfile] = useState<ProfileContextType>({
		status: 'loading',
	})

	const fetchDataProfile = useCallback(async () => {
		setProfile({ status: 'loading' })
		// Aumentar tempo para buscar o retorno, mostrar o skeleton de loading.
		await new Promise((resolve) => setTimeout(resolve, 1000))
		await api
			.get<IAxiosData>(`/users/MouraPragana`)
			.then((response) => {
				setProfile({ data: response.data, status: 'loaded' })
			})
			.catch(() => setProfile({ status: 'error' }))
	}, [])

	useEffect(() => {
		fetchDataProfile()
	}, [fetchDataProfile])

	return (
		<ProfileContext.Provider
			value={{ data: profile.data, status: profile.status }}
		>
			{children}
		</ProfileContext.Provider>
	)
}
