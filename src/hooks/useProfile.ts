import { useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface IFetchStatus {
	status: 'loading' | 'loaded' | 'error'
}

interface IAxiosData {
	avatar_url: string
	bio: string
	company: string
	followers: number
	name: string
	login: string
	html_url: string
}

interface IProfileInterface extends IFetchStatus {
	data?: IAxiosData
}

export function useProfile(nameProfile: string) {
	const [profile, setProfile] = useState({
		status: 'loading',
	} as IProfileInterface)

	const fetchDataProfile = useCallback(async () => {
		setProfile({ status: 'loading' })

		// Aumentar tempo para buscar o retorno, mostrar o skeleton de loading.
		await new Promise((resolve) => setTimeout(resolve, 1000))

		await api
			.get<IAxiosData>(`/users/${nameProfile}`)
			.then((response) => {
				setProfile({ data: response.data, status: 'loaded' })
			})
			.catch(() => setProfile({ status: 'error' }))
	}, [nameProfile])

	useEffect(() => {
		fetchDataProfile()
	}, [fetchDataProfile])

	return profile
}
