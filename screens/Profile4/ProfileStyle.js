import { Dimensions, StyleSheet } from 'react-native'

const windowWidth = Dimensions.get('window').width
const space = 10
export default StyleSheet.create({
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  coverContainer: {
    position: 'relative',
    marginBottom: 55,
  },
  coverImage: {
    width: windowWidth,
    height: windowWidth * (3 / 4),
  },
  coverTitleContainer: {
    backgroundColor: 'transparent',
    paddingTop: 45,
    flex: 1,
    justifyContent: 'space-between',
  },
  coverTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coverMetaContainer: {
    backgroundColor: 'transparent',
    paddingLeft: 150,
    paddingBottom: 10,
  },
  coverName: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  coverBio: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  profileImageContainer: {
    position: 'absolute',
    left: 10,
    bottom: 0,
  },
  profileImage: {
    borderColor: '#FFF',
    borderRadius: 55,
    borderWidth: 3,
    height: 110,
    width: 110,
  },
  indicatorTab: {
    backgroundColor: 'transparent',
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  sceneContainer: {
    marginTop: 10,
  },
  tabBar: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    marginLeft: 130,
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
    position: 'relative',
    zIndex: 10,
    marginTop: -55,
  },
  tabLabelNumber: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  tabLabelText: {
    color: 'gray',
    fontSize: 10,
    textAlign: 'center',
  },
  mansonryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: space,
    marginRight: space,
    // windowWidth - spaceLeft - spaceRight
    // width: windowWidth - space * 2,
    // maxHeight: 730,
  },
})
