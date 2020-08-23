import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-native'

import contactData from '../../mocks/contact.json'

import { Nav } from '../../components'
import Setting from './Setting'

const SettingScreen = (props) => {
  props.navigation.setOptions({
    header: ({navigation}) => (
      <SafeAreaView>
        <Nav
          title="Settings"
          navigation={navigation}
          leftIcon={{
            type: 'ionicon',
            name: 'md-list',
            size: 26,
          }}
        />
      </SafeAreaView>
    ),
  })

  return <Setting {...contactData} {...props} />
}

SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SettingScreen
