import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GithubBlogContextProvider } from './context/githubBlogContext'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<GithubBlogContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</GithubBlogContextProvider>
		</ThemeProvider>
	)
}
