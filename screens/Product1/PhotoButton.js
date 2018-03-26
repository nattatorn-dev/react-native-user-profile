import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'

import ProductStyles from './ProductStyle'

const styles = StyleSheet.create({ ...ProductStyles })

const PhotoButton = () => (
  <View style={styles.coverMetaContainer}>
    <Button
      color="white"
      text="41 Photos"
      icon={<Icon size={22} color="white" type="ionicon" name="md-photos" />}
      iconContainerStyle={{ marginLeft: 10 }}
      textStyle={{
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 8,
        paddingRight: 10,
        paddingTop: 8,
      }}
      buttonStyle={{
        borderWidth: 0,
        borderRadius: 5,
        borderColor: 'transparent',
        backgroundColor: 'rgba(128,128,128, 0.7)',
      }}
      style={{ marginRight: 15, marginBottom: 15, padding: 0 }}
    />
  </View>
)

export default PhotoButton
