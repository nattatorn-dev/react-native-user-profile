import React from 'react'
import { View } from 'react-native'

import { Nav } from '../../components'

const Options = () => <View />

Options.navigationOptions = ({ navigation }) => ({
  header: <Nav title="Settings" navigation={navigation} />,
})

export default Options
