import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './Components/Home'
import Auth from './Components/Auth/Auth'

function App() {
	return (
		<div className='App'>
			<Suspense fallback={''}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
