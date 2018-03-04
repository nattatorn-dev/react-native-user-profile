import React from 'react'
import { Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import Profile1 from './screens/Profile1'
import Profile2 from './screens/Profile2'
import Profile3 from './screens/Profile3'
import Profile4 from './screens/Profile4'

import Product1 from './screens/Product1'

import Options from './screens/Profile3/Options'

const Profile1Stack = StackNavigator(
  {
    profile: {
      screen: Profile1,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const Profile2Stack = StackNavigator(
  {
    profile: {
      screen: Profile2,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const Profile3Stack = StackNavigator(
  {
    profile: {
      screen: Profile3,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const Profile4Stack = StackNavigator(
  {
    profile: {
      screen: Profile4,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const Product1Stack = StackNavigator(
  {
    profile: {
      screen: Product1,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)

const HomeIcon = ({ focused, tintColor }) => (
  <Icon
    name="circle"
    type="entypo"
    size={26}
    color={focused ? tintColor : 'gray'}
  />
)

const RootTabs = TabNavigator(
  {
    profile1: {
      screen: Profile1Stack,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: HomeIcon,
      },
    },
    profile2: {
      screen: Profile2Stack,
      navigationOptions: {
        tabBarLabel: 'Profile2',
        tabBarIcon: HomeIcon,
      },
    },
    profile3: {
      screen: Profile3Stack,
      navigationOptions: {
        tabBarLabel: 'Profile3',
        tabBarIcon: HomeIcon,
      },
    },
    profile4: {
      screen: Profile4Stack,
      navigationOptions: {
        tabBarLabel: 'Profile4',
        tabBarIcon: HomeIcon,
      },
    },

    // PRODUCT
    product1: {
      screen: Product1Stack,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: HomeIcon,
        tabBarVisible: false,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'black' : 'gray',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        width: 30,
        height: 30,
      },
      style: {
        backgroundColor: 'white',
        justifyContent: 'center',
      },
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'profile1',
  }
)

HomeIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
}

export default RootTabs
