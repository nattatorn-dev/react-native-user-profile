import { Card, Icon } from 'react-native-elements'
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Email from './Email'
import PropTypes from 'prop-types'
import React from 'react'
import Separator from './Separator'
import Tel from './Tel'

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  cardHeaderContainer: {},

  contactHeaderName: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
    color: '#fff',
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  contactHeaderdDepartment: {
    fontSize: 15,
    textAlign: 'center',
    color: '#a5a5a5',
    fontWeight: '600',
  },
  contactBodyContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 30,
  },
  image: {
    borderColor: '#01C89E',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  imageContainer: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
})

const contact = {
  imgUrl: 'https://www.mendetails.com/wp-content/uploads/2015/10/JD1.jpg',
  imgBackground:
    'https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png',
  name: 'Elsie Goodman',
  postion: 'Front-end Engineer',
  country: 'Thailand',
  city: 'Bangkok',
  tels: [
    { id: 1, name: 'Mobile', number: '(089) 928-2134' },
    { id: 2, name: 'Work', number: '(999) 435-9887' },
  ],
  emails: [
    { id: 1, name: 'Personal', email: 'elsie-goodman@mail.com' },
    { id: 2, name: 'Work', email: 'elsie@work.com' },
  ],
}

const { city, country, imgUrl, imgBackground, name } = contact

const Contact = () => {
  const renderContactHeader = () => (
    <View style={styles.cardHeaderContainer}>
      <Image
        style={{
          backgroundColor: 'rgb(45,62,80)',
          paddingTop: 35,
          paddingBottom: 20,
        }}
        blurRadius={10}
        source={{
          uri: imgBackground,
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imgUrl,
            }}
          />
          <Text style={styles.contactHeaderName}>{name}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <Icon
                iconStyle={styles.placeIcon}
                name="place"
                onPress={onPressPlace}
                underlayColor="transparent"
              />
            </View>
            <View style={{ backgroundColor: 'transparent' }}>
              <Text style={styles.contactHeaderdDepartment}>
                {city}, {country}
              </Text>
            </View>
          </View>
        </View>
      </Image>
    </View>
  )

  const onPressPlace = () => {
    console.log('place')
  }

  const onPressTel = () => {
    console.log('call')

    // exmalple
    // Linking.openURL('tel:1242').catch(err => console.log('Error:', err))
  }

  const onPressSms = () => {
    console.log('sms')
  }

  const onPressEmail = () => {
    console.log('send email')

    //exmalple
    // Linking.openURL(
    //   'mailto:somethingemail@gmail.com?subject=abcdefg&body=body'
    // ).catch(err => console.log('Error:', err))
  }

  const renderTel = () => (
    <View style={styles.contactBodyContainer}>
      {contact.tels.map(({ id, name, number }, k) => (
        <Tel
          key={`tel-${id}`}
          index={k}
          name={name}
          number={number}
          onPressSms={onPressSms}
          onPressTel={onPressTel}
        />
      ))}
    </View>
  )

  const renderEmail = () => (
    <View style={styles.contactBodyContainer}>
      {contact.emails.map(({ id, name, email }, k) => (
        <Email
          key={`email-${id}`}
          index={k}
          name={name}
          email={email}
          onPressEmail={onPressEmail}
        />
      ))}
    </View>
  )

  return (
    <ScrollView>
      <View style={styles.cardWrapper}>
        <Card containerStyle={styles.cardContainer}>
          {renderContactHeader()}
          {renderTel()}
          {Separator()}
          {renderEmail()}
        </Card>
      </View>
    </ScrollView>
  )
}

// Contact.propTypes = {
//   contact: PropTypes.object.isRequired
// };

export default Contact

Contact.navigationOptions = {
  header: null,
}
