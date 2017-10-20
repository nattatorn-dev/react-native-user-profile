import PropTypes from 'prop-types'
import React from 'react'
import { View } from 'react-native'

const Separator = () => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{ flexDirection: 'row', flex: 2 }} />
    <View
      style={{
        flexDirection: 'row',
        flex: 8,
        borderColor: '#EDEDED',
        borderWidth: 0.8,
      }}
    />
  </View>
)

export default Separator
