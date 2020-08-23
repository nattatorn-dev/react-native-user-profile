import * as React from 'react'
import { Icon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'

import Profile1 from './screens/Profile1'
import Profile2 from './screens/Profile2'
import Profile3 from './screens/Profile3'
import Setting1 from './screens/Setting1'

import Product1 from './screens/Product1'

import SettingOption1 from './screens/Setting1/Options'

const Setting1Stack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <Setting1Stack.Navigator>
      <Setting1Stack.Screen name="Settings" component={Setting1} />
      <Setting1Stack.Screen name="Options" component={SettingOption1} />
    </Setting1Stack.Navigator>
  )
}

const Product1Stack = createStackNavigator()
function Product1StackScreen() {
  return (
    <Product1Stack.Navigator>
      <Product1Stack.Screen name="Product" component={Product1} />
    </Product1Stack.Navigator>
  )
}

const Profile1Stack = createStackNavigator()
function Profile1StackScreen() {
  return (
    <Profile1Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Profile1Stack.Screen name="Profile" component={Profile1} />
    </Profile1Stack.Navigator>
  )
}

const Profile2Stack = createStackNavigator()
function Profile2StackScreen() {
  return (
    <Profile2Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Profile2Stack.Screen name="Profile" component={Profile2} />
    </Profile2Stack.Navigator>
  )
}

const Profile3Stack = createStackNavigator()
function Profile3StackScreen() {
  return (
    <Profile3Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Profile3Stack.Screen name="Profile" component={Profile3} />
    </Profile3Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator()

const HomeIcon = ({ focused, tintColor }) => (
  <Icon
    name="lens"
    type="material"
    size={26}
    color={focused ? '#adacac' : '#ededed'}
  />
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: props => <HomeIcon {...props}/>
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
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
            // backgroundColor: 'transparent',
            justifyContent: 'center',
          },
        }}
      >
        <Tab.Screen name="Profile1" component={Profile1StackScreen} />
        <Tab.Screen name="Profile2" component={Profile2StackScreen} />
        <Tab.Screen name="Profile3" component={Profile3StackScreen} />
        <Tab.Screen name="Product1" component={Product1StackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
