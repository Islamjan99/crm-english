import React from 'react'
import P from '../UI/P'

const MentorItem = ({ id, name, second_name, phone, quantity_of_classes }) => {
	return (
		<div>
			<P>{name}</P>
		</div>
	)
}

export default MentorItem
