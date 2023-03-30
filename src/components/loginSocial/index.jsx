import React from 'react'
import { View, Text } from 'react-native'
import FacebookSvg from '../../imgs/svg/facebook'
import Google from '../../imgs/svg/google'
import TwitterSvg from '../../imgs/svg/twitter'

import styles from './style'

export function LoginSocial() {
  return (
    <View style={styles.container}>
      <Text>OR SIGN IN WITH</Text>
      <View style={styles.loginSocial}>
        <Google />
        <FacebookSvg />
        <TwitterSvg />
      </View>
    </View>

  )
}
