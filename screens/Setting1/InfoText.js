import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: '#F4F5F4',
  },
  infoText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
  },
})
const InfoText = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.infoText}>{text}</Text>
  </View>
)

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default InfoText
