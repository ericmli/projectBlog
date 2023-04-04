import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  containerImage: {
    paddingTop: '30%',
    paddingBottom: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center'
  },
  containerText: {
    backgroundColor: Theme.colors.white[10],
    width: '100%',
    height: '100%',
    marginTop: 10,
    padding: 40,
    borderRadius: 40
  },
  title: {
    color: Theme.colors.black[10],
    fontSize: 28,
    fontWeight: 600

  },
  text: {
    color: Theme.colors.blue[20],
    fontSize: 16,
    marginTop: 20
  },
  textAcessar: {
    backgroundColor: 'red',
    height: '100%'
  },
  containerIcon: {
    width: 80,
    height: 60,
    backgroundColor: Theme.colors.blue[40],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    bottom: 20
  }
})
