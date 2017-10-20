import React from 'react'
import { Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import Profile1 from './components/Profile1/Profile'

const ProfileStack = StackNavigator(
  {
    profile: {
      screen: Profile1,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const HomeIcon = ({ focused, tintColor }) => (
  <Icon name="home" size={26} color={focused ? tintColor : 'black'} />
)

const RootTabs = TabNavigator(
  {
    Home: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: HomeIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'black' : '#fff',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        width: 24,
        height: 24,
      },
      style: {
        backgroundColor: 'white',
        justifyContent: 'center',
      },
    },
  }
)

HomeIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
}

export default RootTabs
