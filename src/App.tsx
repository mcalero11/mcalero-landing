import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(async () => import('pages/Home'))
const Privacy = lazy(async () => import('pages/Privacy'))
const Terms = lazy(async () => import('pages/Terms'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/privacy-policy' element={<Privacy />} />
					<Route path='/terms-of-service' element={<Terms />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
