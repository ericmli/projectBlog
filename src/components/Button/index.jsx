import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Button(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.nameInput}</Text>
    </TouchableOpacity>
  )
}
