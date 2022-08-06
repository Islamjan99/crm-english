import React, { useContext, useEffect, useState } from 'react'
import { fetchMentors } from '../../Http/MentorsAPI'
import { Context } from '../../index'
import MentorItem from './MentorItem'
const Mentor = () => {
	const { MentorsStore } = useContext(Context)
	const [mentors, setMentors] = useState([])
	console.log(MentorsStore.mentors)
	return (
		<div>
			{MentorsStore.mentors.map(mentor => (
				<>
					<MentorItem key={mentor.id} device={mentor} />
				</>
			))}
		</div>
	)
}

export default Mentor
