import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface IFetchStatus {
	status: 'loading' | 'loaded' | 'error'
}

interface AxiosDataInterface {
	avatar_url: string
	bio: string
	company: string
	followers: number
	name: string
	login: string
	html_url: string
}

interface ProfileInterface extends IFetchStatus {
	data?: AxiosDataInterface
}

export function useProfile() {
	const [profile, setProfile] = useState({
		status: 'loading',
	} as ProfileInterface)

	const fetchDataProfile = useCallback(async (user: string) => {
		setProfile({ status: 'loading' })

		// Para simular demora de resposta api.
		await new Promise((resolve) => setTimeout(resolve, 700))
		await api
			.get<AxiosDataInterface>(`/users/${user}`)
			.then((response) => {
				setProfile({ data: response.data, status: 'loaded' })
			})
			.catch(() => setProfile({ status: 'error' }))
	}, [])

	useEffect(() => {
		const user = 'MouraPragana'
		fetchDataProfile(user)
	}, [fetchDataProfile])

	return profile
}
