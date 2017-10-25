import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

export default function CurrentStateIndicator({ state, style, data }) {
  // console.log(data[0])
  return (
    <View style={[styles.page, style]}>
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'red' }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'red' }}>
            {data &&
              data[0] &&
              data[0].image && (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: data[0].image,
                  }}
                />
              )}
            <Text style={styles.text}>Current route is:</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: 'blue' }}>
            <Text style={styles.text}>Current route is:</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: 'green' }}>
            <Text style={styles.text}>Current route is:</Text>
          </View>
          <View style={{ flex: 3, backgroundColor: 'grey' }}>
            <Text style={styles.text}>Current route is:</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
            <Text style={styles.text}>Current route is:</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <View style={{ flex: 5, backgroundColor: 'pink' }}>
            <Text style={styles.text}>Current route is:</Text>
          </View>
          <View style={{ flex: 2, backgroundColor: 'red' }}>
            <Text style={styles.text}>Current route is:</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 3,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
})
