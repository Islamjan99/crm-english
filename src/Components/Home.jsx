import React, { useContext, useEffect, useState } from 'react'
import { fetchMentors } from '../Http/MentorsAPI'
import { Context } from '../index'

const Home = () => {
	const { MentorsStore } = useContext(Context)
	const [mentors, setMentors] = useState([])
	useEffect(() => {
		const data = fetchMentors().then(item =>
			item.map(item => MentorsStore.setMentors(item))
		)
	}, [])
	return <div>Home</div>
}

export default Home
