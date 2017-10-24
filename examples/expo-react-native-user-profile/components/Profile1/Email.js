import { StyleSheet, Text, View } from 'react-native'

import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import React from 'react'

const styles = StyleSheet.create({
  contactBodyItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  telIcon: {
    color: '#01C89E',
    fontSize: 30,
  },
  name: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '200'
  }
})

const Email = ({ containerStyle, onPressEmail, name, email, index }) => (
  <View style={[styles.contactBodyItem, containerStyle]}>
    <View
      style={{
        flex: 2,
        justifyContent: 'center',
      }}
    >
      {index === 0 && (
        <Icon
          iconStyle={styles.telIcon}
          name="email"
          onPress={onPressEmail}
          underlayColor="transparent"
        />
      )}
    </View>
    <View
      style={{
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginBottom: 5,
        }}
      >
        <Text style={{ fontSize: 16 }}>{email}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        {name.trim().length !== 0 && (
          <Text style={styles.name}>
            {name}
          </Text>
        )}
      </View>
    </View>
  </View>
)

Email.propTypes = {
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  index: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string,
  onPressEmail: PropTypes.func.isRequired,
}

Email.defaultProps = {
  containerStyle: {},
  name: null,
}

export default Email
