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
  smsIcon: {
    color: 'gray',
    fontSize: 30,
  },
  telIcon: {
    color: '#01C89E',
    fontSize: 30,
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
            name="call"
            onPress={onPressTel}
            underlayColor="transparent"
          />
        )}
      </View>
      <View
        style={{
          flex: 6,
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
          <Text style={{ fontSize: 16 }}>{number}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          {name.trim().length !== 0 && (
            <Text style={{ fontSize: 14, color: 'gray', fontWeight: '200' }}>
              {name}
            </Text>
          )}
        </View>
      </View>
      <View style={{ flex: 2, justifyContent: 'flex-start' }}>
        <Icon
          iconStyle={styles.smsIcon}
          name="textsms"
          onPress={onPressSms}
          underlayColor="transparent"
        />
      </View>
    </View>
  )
}

Tel.propTypes = {
  containerStyle: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  index: PropTypes.number.isRequired,
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
