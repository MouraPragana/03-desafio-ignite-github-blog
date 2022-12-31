import { BsPeopleFill } from 'react-icons/bs'
import { FaBuilding } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { useContextSelector } from 'use-context-selector'
import { HeaderCard } from '../../../../components/headerCard'
import { GithubBlogContext } from '../../../../context/profileContext'

export function ProfileSection() {
	const profile = useContextSelector(GithubBlogContext, (context) => {
		return context.profile
	})

	const statusLoadProfile = useContextSelector(GithubBlogContext, (context) => {
		return context.profileLoadStatus
	})

	return (
		<HeaderCard
			imageUrl={profile?.avatar_url}
			title={profile?.name}
			textLink="github"
			link={profile?.html_url}
			body={profile?.bio}
			status={statusLoadProfile}
			firstIcon={<ImGithub size={18} />}
			secondIcon={<FaBuilding size={18} />}
			thirdIcon={<BsPeopleFill size={18} />}
			firstTextIcon={profile?.login}
			secondTextIcon={profile?.company}
			thirdTextIcon={`${profile?.followers} seguidores`}
		/>
	)
}
