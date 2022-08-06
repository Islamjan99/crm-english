import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Home from './components/Home'
import Auth from './components/Auth/Auth'
import Header from './components/Header/Header'
import Mentors from './components/Mentor/Mentors'
import Students from './components/Student/Students'
import Courses from './components/Courses/Courses'

function App() {
	return (
		<div className='App'>
			<Header />
			<Suspense fallback={''}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/mentors' element={<Mentors />} />
					<Route path='/Courses' element={<Courses />} />
					<Route path='/students' element={<Students />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
