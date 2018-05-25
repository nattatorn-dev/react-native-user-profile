import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon } from 'react-native-elements'

import ProductStyles from './ProductStyle'

const styles = StyleSheet.create({ ...ProductStyles })

const PhotoButton = () => (
  <View style={styles.coverMetaContainer}>
    <Button
      color="white"
      title="41 Photos"
      icon={<Icon size={22} color="white" type="ionicon" name="md-photos" />}
      // iconContainerStyle={{ marginLeft: 10 }}
      textStyle={{
        fontSize: 16,
        fontWeight: '400',
        // paddingBottom: 8,
        // paddingRight: 10,
        // paddingTop: 8,
      }}
      buttonStyle={{
        borderWidth: 0,
        borderRadius: 5,
        paddingLeft: 10,
        // borderColor: 'transparent',
        backgroundColor: 'rgba(128,128,128, 0.7)',
        elevation: 0,
      }}
      containerStyle={{
        marginBottom: 15,
        marginRight: 15,
        padding: 0,
      }}
    />
  </View>
)

export default PhotoButton
