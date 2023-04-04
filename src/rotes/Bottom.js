import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { Menu } from '../screens/menu'
import { HomeSvg } from '../imgs/svg/home'
import ArticlesSvg from '../imgs/svg/articles'
import { Theme } from '../theme/Theme'
import { Home } from '../screens/home'
import { Article } from '../screens/article'
import MenuSvg from '../imgs/svg/menu'
import { CreateArticle } from '../screens/createArticle'
import SearchSvg from '../imgs/svg/search'

const Tab = createBottomTabNavigator()

export function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.blue[40],
        tabBarLabelStyle: { fontSize: 14 }
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <HomeSvg />
          }
        }}
      />

      <Tab.Screen
        name="Article"
        component={Article}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <ArticlesSvg />
          }
        }}
      />

      <Tab.Screen
        name="New"
        component={CreateArticle}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <View style={styles.a}>
            <TouchableOpacity {...props} style={styles.addButtonContainer}>
              <Text style={styles.addButton}>+</Text>
            </TouchableOpacity>
          </View>
          )
        }}
      />

      <Tab.Screen
        name="Search"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <SearchSvg />
          }
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <MenuSvg />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  a: {
    backgroundColor: 'white',
    bottom: 25,
    padding: 5,
    borderRadius: 50
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Theme.colors.blue[40]
  },
  addButton: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    fontSize: 36,
    textAlign: 'center',
    color: 'white',
    fontWeight: 100
  }
})
