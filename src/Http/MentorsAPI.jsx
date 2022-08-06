import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const fetchMentors = async () => {
	const { data } = await $host.get('/Mentors')
	return data
}

export const login = async (email, password) => {
	const { data } = await $host.post('api/user/login', { email, password })
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}

export const check = async () => {
	const { data } = await $authHost.get('api/user/auth')
	return jwt_decode(data.token)
}
export const authuser = async () => {
	const { data } = await $authHost.get('api/user/authuser')
	return data
}
