/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import styles from './styles'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/EvilIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import api from '../../service'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

const DATA = [
  {
    id: 1,
    title: 'Technologic',
    photo: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dnIlMjBodW1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Adventure',
    photo: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
  }
]

export function Flat() {
  const [name, setName] = useState([])
  const [user, setUser] = useState([])

  // Garantir que está na tela que foi selecionada
  useFocusEffect(
    React.useCallback(() => {
      hangleItem()
      addUser()
    }, [])
  )

  async function hangleItem() {
    setName(await AsyncStorage.getItem('name'))
  }

  async function addUser() {
    const data = await api.get('users')
    setUser(data.data)
  }

  const renderItem = ({ item }) => (
    <View style={styles.containerList}>
      <LinearGradient style={styles.border} colors={['#376AED', '#49B0E2', '#9CECFB']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}>
        <Image source={{ uri: item.photo }} style={styles.imageList} />
        <Icon name={item.icon} size={20} color={'white'} style={styles.iconList} />
      </LinearGradient>
      <Text style={styles.textList}>{item.name}</Text>
    </View>
  )

  const listAdd = ({ item }) => (
    <View style={styles.listMainList}>
      <Image source={{ uri: item.photo }} style={styles.imageMainList} />
      <Text style={styles.textMainList}>{item.title}</Text>
    </View>
  )

  return (
    <View >
      <View style={styles.body}>
        <View style={styles.containerNameIcon}>
          <Text style={styles.textName}>Hi, {name}!</Text>
          <TouchableOpacity style={styles.iconTop}>
            <Icon name={'bell'} size={36} color={'black'} style={{ marginLeft: 'auto', marginBottom: 10 }} />
            <Text style={styles.textTop}></Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 24, color: 'black', fontWeight: 600 }}>Explore today's </Text>

      </View>
      <FlatList
        data={user}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={DATA}
        renderItem={listAdd}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.textBottom}>Latest News</Text>

    </View>
  )
}
