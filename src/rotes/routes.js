import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IncludeAll from '../screens/includeLoginRegister'
import { Onboarding } from '../screens/onboarding'
import { Reset } from '../screens/resetPassword'
import { Theme } from '../theme/Theme'
import { Bottom } from './Bottom'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: Theme.colors.blue[40]
  },
  headerTintColor: Theme.colors.white[10],
  headerBackTitle: 'Back'
}

export function MyStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="sendHome">
      <Stack.Screen
        name="Login"
        component={IncludeAll}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Onboarding" component={Onboarding} />

      <Stack.Screen name="Reset Password" component={Reset} />

      <Tab.Screen
        name="sendHome"
        component={Bottom}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
