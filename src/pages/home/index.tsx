import { IssuesSection } from './components/issuesSection'
import { ProfileSection } from './components/profileSection'
import { ContentContainer } from './styles'

export function Home() {
	return (
		<ContentContainer>
			<ProfileSection />
			<IssuesSection />
		</ContentContainer>
	)
}
