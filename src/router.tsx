import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Home } from './pages/home'
import { Post } from './pages/post'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/post/:issueNumber" element={<Post />} />
			</Route>
		</Routes>
	)
}
