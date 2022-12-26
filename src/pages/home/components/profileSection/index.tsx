import { Skeleton } from '@mui/material'
import { BsPeopleFill } from 'react-icons/bs'
import { FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import { useProfile } from '../../../../hooks/useProfile'
import {
	ProfileCard,
	SocialContent,
	TextContent,
	TextContentBody,
	TextContentHeader,
	TextContentLink,
	TextContentTitle,
} from './styles'

export function ProfileSection() {
	const profile = useProfile()

	return (
		<ProfileCard>
			{profile.status === 'loading' ? (
				<Skeleton variant="rounded" width={148} height={148} />
			) : (
				<img src={profile.data?.avatar_url} alt="Profile pic" />
			)}

			<TextContent>
				<TextContentHeader>
					{profile.status === 'loading' ? (
						<Skeleton width={'100%'} height={30} />
					) : (
						<>
							<TextContentTitle>{profile.data?.name}</TextContentTitle>
							<TextContentLink
								href={profile.data?.html_url}
								target="_blank"
								rel="noreferrer"
							>
								Github <FaExternalLinkAlt size={12} />
							</TextContentLink>
						</>
					)}
				</TextContentHeader>

				{profile.status === 'loading' ? (
					<Skeleton height={'100%'} width={'100%'} />
				) : (
					<TextContentBody>{profile.data?.bio}</TextContentBody>
				)}

				{profile.status === 'loading' ? (
					<Skeleton height={60} width={'100%'} />
				) : (
					<SocialContent>
						<div>
							<ImGithub size={18} />
							<span>{profile.data?.login}</span>
						</div>

						<div>
							<FaBuilding size={18} /> <span>{profile.data?.company}</span>
						</div>

						<div>
							<BsPeopleFill size={18} />
							<span>{profile.data?.followers} seguidores</span>
						</div>
					</SocialContent>
				)}
			</TextContent>
		</ProfileCard>
	)
}
