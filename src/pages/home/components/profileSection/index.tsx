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
					<span>
						<ImGithub size={17} />
						MouraPragana
					</span>
					<span>
						<FaBuilding size={17} />
						Rocketseat
					</span>
					<span>
						<BsPeopleFill size={17} />
						100 seguidores
					</span>
				</SocialContent>
			</TextContent>
		</ProfileCard>
	)
}
