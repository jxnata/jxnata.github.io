import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga'
import App from './App.tsx'
import { GA_TRACKING_ID } from './lib/constants.ts'

ReactGA.initialize(GA_TRACKING_ID)

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
