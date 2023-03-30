import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './routes'

export function Routes() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
