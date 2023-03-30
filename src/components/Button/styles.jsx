import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({

  container: {
    backgroundColor: Theme.colors.blue[40],
    width: '100%',
    height: 60,
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 15
  },
  text: {

    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: Theme.colors.white[10],
    fontSize: 20
  }
})
