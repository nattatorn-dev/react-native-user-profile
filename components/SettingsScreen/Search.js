import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import Colors from './constants'

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: 'row',
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFF',
  },
  leftSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightSection: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  systemText: {
    color: Colors.blueIos,
    fontSize: 18,
    fontWeight: '400',
  },
})

console.log(Colors)
const HeaderNavigation = ({ navigation, title }) => (
  <View style={{ backgroundColor: '#FFF' }}>
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon
          color={Colors.blueIos}
          underlayColor={Colors.baseTransparent}
          underlineColorAndroid={Colors.baseTransparent}
          size={26}
          name="md-list"
          type="ionicon"
          onPress={() => {
            // navigation.goBack(null)
          }}
          iconStyle={{
            marginTop: 5,
            backgroundColor: Colors.baseTransparent,
            textAlign: 'left',
            width: 130,
          }}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        />
      </View>
      <View style={styles.centerSection}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.systemText} numberOfLines={1}>
          {'Log out'}
        </Text>
      </View>
    </View>
  </View>
)

HeaderNavigation.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default HeaderNavigation
