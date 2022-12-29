import { BsPeopleFill } from 'react-icons/bs'
import { FaBuilding } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { useContextSelector } from 'use-context-selector'
import { HeaderCard } from '../../../../components/headerCard'
import { ProfileContext } from '../../../../context/profileContext'

export function ProfileSection() {
	const profile = useContextSelector(ProfileContext, (context) => {
		return context
	})

	return (
		<HeaderCard
			imageUrl={profile.data?.avatar_url}
			title={profile.data?.name}
			textLink="github"
			link={profile.data?.html_url}
			body={profile.data?.bio}
			status={profile.status}
			firstIcon={<ImGithub size={18} />}
			secondIcon={<FaBuilding size={18} />}
			thirdIcon={<BsPeopleFill size={18} />}
			firstTextIcon={profile.data?.login}
			secondTextIcon={profile.data?.company}
			thirdTextIcon={`${profile.data?.followers} seguidores`}
		/>
	)
}
