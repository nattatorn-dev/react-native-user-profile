import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Platform } from 'react-native'
import PropTypes from 'prop-types'

import { Colors } from '../constants'

const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        height: 55,
      },
      android: {
        height: 80,
      },
    }),
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    justifyContent: 'flex-start',
    marginTop: 2.8,
  },
  iconContainer: {
    alignSelf: 'center',
  },
  leftRow: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  logoutText: {
    color: Colors.blue,
    fontSize: 18,
    fontWeight: '400',
  },
  rightRow: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
})

const Search = ({ title, navigation, leftIcon }) => (
  <View style={{ backgroundColor: 'white' }}>
    <View style={styles.container}>
      <View style={styles.leftRow}>
        <Icon
          size={34}
          type="ionicon"
          name="ios-arrow-back"
          underlayColor="transparent"
          underlineColorAndroid="transparent"
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          color={Colors.blue}
          iconStyle={styles.icon}
          containerStyle={styles.iconContainer}
          onPress={() => navigation.goBack(null)}
          {...leftIcon}
        />
      </View>
      <View style={styles.centerRow}>
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.rightRow}>
        <Text style={styles.logoutText}>Log out</Text>
      </View>
    </View>
  </View>
)

Search.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  leftIcon: PropTypes.object,
}

Search.defaultProps = {
  leftIcon: {},
}

export default Search
