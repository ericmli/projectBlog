import React from 'react'
import { View, Text } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Theme } from '../../theme/Theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SvgMain1 from '../../imgs/svg/Main1'
import SvgMain2 from '../../imgs/svg/Main2'
import SvgMain3 from '../../imgs/svg/Main3'
import SvgMain4 from '../../imgs/svg/Main4'
import SvgComponent from '../../imgs/svg/logo'

const Main1 = <SvgMain1 />
const Main2 = <SvgMain2 />
const Main3 = <SvgMain3 />
const Main4 = <SvgMain4 />
const blog = <SvgComponent />

const slides = [

  {
    key: 1,
    title: 'All article ready for you',
    text: 'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
    image: blog
  },
  {
    key: 2,
    title: 'Read the article you want instantly',
    text: 'You can read thousands of articles on Blog Club, save them in the application and share them with your loved ones.',
    image: Main1,
    image2: Main2,
    image3: Main3,
    image4: Main4
  }
]

export function Onboarding({ navigation }) {
  const [showHome] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      // AsyncStorage.removeItem('new')
      autoLogin()
    }, [])
  )
  const autoLogin = async () => {
    try {
      const notNew = await AsyncStorage.getItem('new')
      if (notNew === '1') {
        navigation.replace('Login')
      }
    } catch (error) {
      console.log('Token inexistente novo usuário !')
    }
  }

  function hangleLogin() {
    AsyncStorage.setItem('new', '1')
    navigation.navigate('Login')
  }

  function renderSlides({ item }) {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Text>{item.image3}</Text>
          <Text>{item.image}</Text>
          <Text>{item.image2}</Text>
          <Text>{item.image4}</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    )
  }

  if (showHome) {
    return <Text>Entrou</Text>
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: Theme.colors.blue[40],
          width: 30
        }}
        renderDoneButton={() =>
          <View style={styles.containerIcon}>
            <Icon
              name='arrow-forward'
              size={20}
              type='evilicon'
              color={Theme.colors.white[10]} />
          </View>}
        onDone={hangleLogin}
      />
    )
  }
}
