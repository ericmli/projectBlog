import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Login from '../screens/login'
import Register from '../screens/register'
import { Theme } from '../theme/Theme'

export default function Tabs() {
  const Tab = createMaterialTopTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          color: Theme.colors.white[10],
          padding: 10,
          fontWeight: 500
        },
        tabBarItemStyle: { shadowColor: 'none' },
        tabBarStyle: { backgroundColor: 'transparent' }
      }}>
      <Tab.Screen name="LOGIN" component={Login} />
      <Tab.Screen name="SIGN UP" component={Register} />
    </Tab.Navigator>
  )
}
