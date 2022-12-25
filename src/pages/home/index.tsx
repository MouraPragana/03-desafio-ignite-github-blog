import {
	ContentContainer,
	ProfileCard,
	SocialContent,
	TextContent,
} from './styles'
import profile from '../../assets/profile.png'
import { ImGithub } from 'react-icons/im'
import { FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'

export function Home() {
	return (
		<ContentContainer>
			<ProfileCard>
				<img src={profile} alt="Profile pic" />
				<TextContent>
					<div>
						<h2>Mateus Pragana</h2>
						<a href="">
							Github <FaExternalLinkAlt size={11} />
						</a>
					</div>

					<span>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius neque
						ipsum labore in illo esse, sed nemo tempore! Voluptate dolore
					</span>
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
		</ContentContainer>
	)
}
