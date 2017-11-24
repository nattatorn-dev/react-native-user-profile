import React, { Component } from 'react'
import { Colors } from 'constants'

import { View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { NoItemComponent, Search } from '@components'

class RegionSetting extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40, flexDirection: 'row' }}>
            <FontAwesome
              name={'cog'}
              size={24}
              style={{ paddingTop: 5, paddingLeft: 3 }}
              color={'white'}
              onPress={() => {
                navigation.goBack( null )
              }}
            />
            <Search navigation={navigation} />
          </View>
        </View>
      ),
    }
  }

  render() {
    return (
      <NoItemComponent
        iconName="error"
        infoHeading="Not Implemented"
        infoParagraph="Since this screen is similar to DefaultTab screen. "
      />
    )
  }
}

export default RegionSetting
