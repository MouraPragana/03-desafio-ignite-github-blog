import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { ProfileContextProvider } from './context/profileContext'

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			<ProfileContextProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ProfileContextProvider>
		</ThemeProvider>
	)
}
