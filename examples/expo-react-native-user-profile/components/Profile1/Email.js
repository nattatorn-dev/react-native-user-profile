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
  iconEmail: {
    color: '#01C89E',
    fontSize: 30,
  },
  name: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  rowEmail: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  rowIcon: {
    flex: 2,
    justifyContent: 'center',
  },
  sectionEmail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  sectionName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textEmail: {
    fontSize: 16,
  },
})

const Email = ({ containerStyle, onPressEmail, name, email, index }) => (
  <TouchableOpacity onPress={() => onPressEmail(email)}>
    <View style={[styles.container, containerStyle]}>
      <View style={styles.rowIcon}>
        {+index === 0 && (
          <Icon
            name="email"
            underlayColor="transparent"
            iconStyle={styles.iconEmail}
            onPress={() => onPressEmail()}
          />
        )}
      </View>
      <View style={styles.rowEmail}>
        <View style={styles.sectionEmail}>
          <Text style={styles.textEmail}>{email}</Text>
        </View>
        <View style={styles.sectionName}>
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
  email: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  name: PropTypes.string,
  onPressEmail: PropTypes.func.isRequired,
}

Email.defaultProps = {
  containerStyle: {},
  name: null,
}

export default Email
