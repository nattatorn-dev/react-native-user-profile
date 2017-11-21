import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

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
  rowSms: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  rowTel: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  sectionTelName: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  sectionTelNumber: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  smsIcon: {
    color: 'gray',
    fontSize: 30,
  },
  telIcon: {
    color: '#01C89E',
    fontSize: 30,
  },
  textTelName: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  textTelNumber: {
    fontSize: 16,
  },
})

const Tel = ({
  containerStyle,
  index,
  name,
  number,
  onPressSms,
  onPressTel,
}) => {
  return (
    <TouchableOpacity onPress={() => onPressTel(number)}>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.rowIcon}>
          {+index === 0 && (
            <Icon
              name="call"
              underlayColor="transparent"
              iconStyle={styles.telIcon}
              onPress={() => onPressTel(number)}
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
            name="textsms"
            underlayColor="transparent"
            iconStyle={styles.smsIcon}
            onPress={() => onPressSms()}
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
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  onPressSms: PropTypes.func.isRequired,
  onPressTel: PropTypes.func.isRequired,
}

Tel.defaultProps = {
  containerStyle: {},
  name: null,
}

export default Tel
