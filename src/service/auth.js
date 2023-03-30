import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)

  const login = (token) => {
    setToken(token)
    AsyncStorage.setItem('token', JSON.stringify(token))
    AsyncStorage.setItem('name', token[0]?.name)
    AsyncStorage.setItem('email', token[0]?.email)
  }

  const logout = () => {
    setToken(null)
    AsyncStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
