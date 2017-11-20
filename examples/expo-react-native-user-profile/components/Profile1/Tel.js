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
  smsIcon: {
    color: 'gray',
    fontSize: 30,
  },
  telIcon: {
    color: '#01C89E',
    fontSize: 30,
  },
  rowTel: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTelNumber: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  sectionTelName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textTelNumber: {
    fontSize: 16,
  },
  textTelName: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '200',
  },
  rowSms: {
    flex: 2,
    justifyContent: 'flex-start',
  },
})

const Tel = ({
  containerStyle,
  index,
  number,
  onPressSms,
  onPressTel,
  name,
}) => {
  return (
    <TouchableOpacity onPress={() => onPressTel(number)}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.rowIcon}>
          {+index === 0 && (
            <Icon
              iconStyle={styles.telIcon}
              name="call"
              onPress={() => onPressTel(number)}
              underlayColor="transparent"
            />
          )}
        </View>
        <View style={styles.rowTel}>
          <View style={styles.sectionTelNumber}>
            <Text style={styles.textTelNumber}>{number}</Text>
          </View>
          <View style={styles.sectionTelName}>
            {name.trim().length !== 0 && (
              <Text style={styles.textTelName}>{name}</Text>
            )}
          </View>
        </View>
        <View style={styles.rowSms}>
          <Icon
            iconStyle={styles.smsIcon}
            name="textsms"
            onPress={() => onPressSms()}
            underlayColor="transparent"
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

Tel.propTypes = {
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  index: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string,
  onPressTel: PropTypes.func.isRequired,
  onPressSms: PropTypes.func.isRequired,
}

Tel.defaultProps = {
  containerStyle: {},
  name: null,
}

export default Tel
