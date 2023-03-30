import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.white[10]
  },
  body: {
    marginTop: 40,
    backgroundColor: Theme.colors.blue[40],
    width: '100%',
    height: '90%',
    borderRadius: 40

  }
})
