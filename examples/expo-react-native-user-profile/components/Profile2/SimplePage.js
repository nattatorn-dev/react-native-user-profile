import React from 'react'
import {
  Dimensions,
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { Card } from 'react-native-elements'

export default function CurrentStateIndicator({ state, style, data }) {
  console.log(data)
  return (
    <View style={[styles.page, style]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        {data &&
          data.map((e, k) => {
            console.log(k)
            return (
              <TouchableOpacity
                key={`caseStudy--${k}`}
                // onPress={() => onPressCaseStudySelect(data[0]., title)}
              >
                <Card containerStyle={styles.card} key={`caseStudy--${k}`}>
                  <Image style={styles.image} source={{ uri: e.image }} />
                  <View style={styles.sectionText}>
                    <Text style={styles.textTitle}>{e.title}</Text>
                    <Text style={styles.textDescription} numberOfLines={2}>
                      {e.description}
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            )
          })}
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
  card: {
    // flexGrow: 1,
    justifyContent: 'space-between',
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 10,
    padding: 0,
  },
  image: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 5,
  },
  sectionText: {
    paddingTop: 6,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textTitle: {
    fontSize: 12.5,
    fontWeight: '500',
    marginBottom: 5,
  },
  textDescription: {
    fontSize: 11,
  },
})
