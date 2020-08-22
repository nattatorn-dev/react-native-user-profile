import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import { Colors } from '../constants'

const styles = StyleSheet.create({
  centerRow: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  container: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
    flexDirection: 'row',
    height: 125,
    justifyContent: 'center',
    left: 0,
    marginLeft: 10,
    marginRight: 10,
    position: 'absolute',
    right: 0,
    zIndex: 100,
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
  rightRow: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 4,
  },
  titleText: {
    color: Colors.white,
    fontSize: 24,
    fontWeight: '600',
  },
  subTitleText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '400',
  },
})

class Nav extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }

  state = {
    like: false,
  }

  onPressLike = () => {
    this.setState(state => ({
      like: !state.like,
    }))
  }

  render() {
    const { navigation, title, subTitle } = this.props

    return (
      <View>
        <View style={styles.container}>
          <View style={styles.leftRow}>
            <Icon
              size={34}
              name="arrow-back"
              type="material-icon"
              color={Colors.white}
              iconStyle={styles.icon}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              containerStyle={styles.iconContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            />
          </View>
          <View style={styles.centerRow}>
            <Text style={styles.titleText} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitleText} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.rightRow}>
            <Icon
              size={40}
              type="entypo"
              name="heart-outlined"
              iconStyle={styles.icon}
              onPress={this.onPressLike}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              color={this.state.like ? Colors.pink : Colors.white}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
              containerStyle={[styles.iconContainer, { marginRight: 12 }]}
            />
            <Icon
              size={32}
              type="feather"
              name="share-2"
              color={Colors.white}
              onPress={() => null}
              iconStyle={styles.icon}
              underlayColor="transparent"
              underlineColorAndroid="transparent"
              containerStyle={styles.iconContainer}
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Nav
