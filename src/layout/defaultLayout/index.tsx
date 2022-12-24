import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
	return (
		<>
			<div>Layout Padrão</div>
			<Outlet />
		</>
	)
}
