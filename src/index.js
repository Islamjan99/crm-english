import { createContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './Global.css'
import App from './App'
import UserStore from './GlobalStore/UserStore'
import AdminStore from './GlobalStore/AdminStore'

export const Context = createContext(null)

ReactDOM.render(
	<Context.Provider
		value={{
			user: new UserStore(),
			device: new AdminStore(),
		}}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Context.Provider>,
	document.getElementById('root')
)
