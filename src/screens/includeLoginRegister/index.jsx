import React from 'react'
import Tabs from '../../rotes/switch'
import { View } from 'react-native'
import SvgComponent from '../../imgs/svg/logo'
import styles from './styles'
// Serve para integrar a imagem SVG com as navegações do Tab
export default function IncludeAll() {
  return (
    <View style={styles.container}>
      <SvgComponent />
      <View style={styles.body}>
        <Tabs />
      </View>

    </View>
  )
}
