import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../../service/auth'
import styles from './styles'

export function Menu({ navigation }) {
  const { logout } = useContext(AuthContext)

  function leave() {
    logout()
    navigation.replace('Login')
  }

  return (
    <View style={styles.teste}>
      <TouchableOpacity onPress={leave}>
        <Text style={{ textAlign: 'center' }}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}
