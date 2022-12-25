import { Outlet } from 'react-router-dom'
import { Header, PageContent } from './styles'
import logo from '../../assets/logo.svg'

export function DefaultLayout() {
	return (
		<PageContent>
			<Header>
				<img src={logo} alt="Github Blog Logo" />
			</Header>
			<Outlet />
		</PageContent>
	)
}
