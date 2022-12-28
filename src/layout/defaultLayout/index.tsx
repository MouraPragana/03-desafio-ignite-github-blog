import { Outlet } from 'react-router-dom'
import { Body, Header, PageContent } from './styles'
import logo from '../../assets/logo.svg'

export function DefaultLayout() {
	return (
		<PageContent>
			<Header>
				<img src={logo} alt="Github Blog Logo" />
			</Header>
			<Body>
				<Outlet />
			</Body>
		</PageContent>
	)
}
