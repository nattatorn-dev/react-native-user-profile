import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  Image,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import Tel from './Tel'
import Email from './Email'
import Separator from './Separator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  telContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 30,
  },
  emailContainer: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 30,
  },
  hearderContainer: {},

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

class Contact extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    emails: PropTypes.array.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imgBackground: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tels: PropTypes.array.isRequired,
  }

  state = {
    telDataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }).cloneWithRows(this.props.tels),
    emailDataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }).cloneWithRows(this.props.emails),
  }

  onPressPlace = () => {
    console.log('place')
  }

  onPressTel = number => {
    Linking.openURL(`tel:${number}`).catch(err => console.log('Error:', err))
  }

  onPressSms = () => {
    console.log('sms')
  }

  onPressEmail = email => {
    Linking.openURL(`mailto:${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err)
    )
  }

  renderContactHeader = () => {
    const { city, country, imgUrl, imgBackground, name } = this.props

    return (
      <View style={styles.hearderContainer}>
        <Image
          style={{
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
                  onPress={this.onPressPlace}
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
  }

  renderTel = () => (
    <ListView
      contentContainerStyle={styles.telContainer}
      dataSource={this.state.telDataSource}
      renderRow={({ id, name, number }, _, k) => {
        return (
          <Tel
            key={`tel-${id}`}
            index={k}
            name={name}
            number={number}
            onPressSms={this.onPressSms}
            onPressTel={this.onPressTel}
          />
        )
      }}
    />
  )

  renderEmail = () => (
    <ListView
      contentContainerStyle={styles.emailContainer}
      dataSource={this.state.emailDataSource}
      renderRow={({ id, name, email }, _, k) => {
        return (
          <Email
            key={`email-${id}`}
            index={k}
            name={name}
            email={email}
            onPressEmail={this.onPressEmail}
          />
        )
      }}
    />
  )

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderContactHeader()}
            {this.renderTel()}
            {Separator()}
            {this.renderEmail()}
          </Card>
        </View>
      </ScrollView>
    )
  }
}

export default Contact
