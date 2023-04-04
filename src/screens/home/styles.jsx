import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: 'white'
  },
  body: {
    paddingTop: 30,
    width: '100%'
  },
  textName: {
    fontSize: 18,
    color: Theme.colors.blue[20]
  },
  containerNameIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%'
  },
  iconTop: {
    right: 0,
    top: 5
  },
  textTop: {
    fontSize: 10,
    position: 'absolute',
    backgroundColor: '#EB4C42',
    borderRadius: 50,
    width: 15,
    height: 15,
    textAlign: 'center',
    left: 5
  },
  flatStyle: {
    paddingLeft: '5%'
  },
  containerList: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginLeft: 0
  },
  imageList: {
    width: 54,
    height: 54,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  border: {
    position: 'relative',
    borderWidth: 2,
    borderColor: '#49B0E2',
    height: 68,
    width: 68,
    borderRadius: 20
  },
  textList: {
    position: 'absolute',
    bottom: 0,
    flexWrap: 'wrap',
    fontSize: 12,
    color: Theme.colors.blue[20]
  },
  iconList: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#7D4C9B',
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: 'center'
  },
  listMainList: {
    margin: 10,
    marginLeft: 0,
    marginTop: 0
  },
  imageMainList: {
    width: 236,
    height: 273,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginLeft: 0,
    borderRadius: 28,
    paddingRight: 20
  },
  textBottom: {
    fontSize: 24,
    color: Theme.colors.blue[20],
    fontWeight: 600,
    paddingBottom: 10
  },
  textMainList: {
    position: 'absolute',
    bottom: 60,
    color: Theme.colors.white[10],
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: 200
  },
  listNewsList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },
  imageNews: {
    width: '30%',
    height: 150,
    borderRadius: 20
  },
  listNewsListTexts: {
    width: '65%',
    padding: 20,
    paddingTop: 10
  },
  textNewsName: {
    color: Theme.colors.blue[40],
    fontSize: 20
  },
  textNewsTitle: {
    color: '#000',
    width: '80%'
  }
})
