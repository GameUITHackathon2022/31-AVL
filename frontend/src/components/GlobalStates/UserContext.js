import React, { useState, createContext } from 'react'
import { useCookies } from 'react-cookie'
import jwtDecode from 'jwt-decode'

const UserContext = createContext()

function UserProvider({ children }) {
	const [cookies] = useCookies('access_token')
	const [user, setUser] = useState(() => {
		const token = cookies.access_token
		if (token) {
			const user = jwtDecode(token)

			return user
		}
		return null
	})
	
	
	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export { UserProvider, UserContext }
