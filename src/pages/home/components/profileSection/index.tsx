import { BsPeopleFill } from 'react-icons/bs'
import { FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'
import profile from '../../../../assets/profile.png'
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
	return (
		<ProfileCard>
			<img src={profile} alt="Profile pic" />
			<TextContent>
				<TextContentHeader>
					<TextContentTitle>Mateus Pragana</TextContentTitle>
					<TextContentLink href="">
						Github <FaExternalLinkAlt size={12} />
					</TextContentLink>
				</TextContentHeader>

				<TextContentBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius neque
					ipsum labore in illo esse, sed nemo tempore! Voluptate dolore
				</TextContentBody>

				<SocialContent>
					<div>
						<ImGithub size={18} />
						<span>MouraPragana</span>
					</div>

					<div>
						<FaBuilding size={18} /> <span>Rocketseat</span>
					</div>

					<div>
						<BsPeopleFill size={18} />
						<span>100 seguidores</span>
					</div>
				</SocialContent>
			</TextContent>
		</ProfileCard>
	)
}
