import React, { useState } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'
import api from '../../service'
import { Flat } from './flatlist'

export function Home() {
  const [news, setNews] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      addNews()
    }, [])
  )

  async function addNews() {
    const data = await api.get('news')
    setNews(data.data)
  }

  const listAdd = ({ item }) => (
    <View style={styles.listNewsList}>
      <Image source={{ uri: item.photo }} style={styles.imageNews} />
      <View style={styles.listNewsListTexts}>
        <Text style={styles.textNewsName}>{item.name.toUpperCase()}</Text>
        <Text style={styles.textNewsTitle}>{item.title}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>

      <FlatList
        ListHeaderComponent={Flat}
        data={news}
        renderItem={listAdd}
        keyExtractor={(item) => item.id}
        style={styles.flatStyle}
      />
    </View>
  )
}
