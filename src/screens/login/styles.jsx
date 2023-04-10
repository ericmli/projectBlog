import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({

  container: {
    backgroundColor: Theme.colors.blue[40],
    width: '100%',
    height: '100%'

  },
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.white[10],
    borderRadius: 40,
    padding: 40,
    paddingTop: 20
  },
  title: {
    color: Theme.colors.black[20],
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  containerReset: {
    flexDirection: 'row',
    gap: 8,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  textReset: {
    color: Theme.colors.blue[40]
  }

})
