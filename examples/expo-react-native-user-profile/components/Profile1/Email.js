import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  rowIcon: {
    flex: 2,
    justifyContent: 'center',
  },
  icon: {
    color: '#01C89E',
    fontSize: 30,
  },
  rowTel: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTelNumber: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  textTelNumber: { fontSize: 16 },
  sectionTelName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '200',
  },
})

const Email = ({ containerStyle, onPressEmail, name, email, index }) => (
  <TouchableOpacity onPress={() => onPressEmail(email)}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.rowIcon}>
        {+index === 0 && (
          <Icon
            iconStyle={styles.icon}
            name="email"
            onPress={() => onPressEmail()}
            underlayColor="transparent"
          />
        )}
      </View>
      <View style={styles.rowTel}>
        <View style={styles.sectionTelNumber}>
          <Text style={styles.textTelNumber}>{email}</Text>
        </View>
        <View style={styles.sectionTelName}>
          {name.trim().length !== 0 && <Text style={styles.name}>{name}</Text>}
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

Email.propTypes = {
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  index: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string,
  onPressEmail: PropTypes.func.isRequired,
}

Email.defaultProps = {
  containerStyle: {},
  name: null,
}

export default Email
