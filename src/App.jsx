import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Routes } from './rotes'
import AuthProvider from './service/auth'

export default function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
