import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
				<Router>
					<Navbar />
					<main>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</main>
					<Footer />
				</Router>
			</ThemeProvider>
		</QueryClientProvider>
	)
}

export default App
