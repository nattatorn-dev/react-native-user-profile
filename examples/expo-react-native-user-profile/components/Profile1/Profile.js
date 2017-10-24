import React, { Component } from "react"
import { Card, Icon } from "react-native-elements"
import {
  Image,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

import Email from "./Email"
import PropTypes from "prop-types"
import Separator from "./Separator"
import Tel from "./Tel"

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: "#fff",
  },
  cardHeaderContainer: {},

  contactHeaderName: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
    color: "#fff",
  },
  placeIcon: {
    color: "white",
    fontSize: 26,
  },
  contactHeaderdDepartment: {
    fontSize: 15,
    textAlign: "center",
    color: "#a5a5a5",
    fontWeight: "600",
  },
  contactBodyContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 30,
  },
  image: {
    borderColor: "#01C89E",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  imageContainer: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
})

const contact = {
  imgUrl: "https://www.mendetails.com/wp-content/uploads/2015/10/JD1.jpg",
  imgBackground:
    "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
  name: "Elsie Goodman",
  postion: "Front-end Engineer",
  country: "Thailand",
  city: "Bangkok",
  tels: [
    { id: 1, name: "Mobile", number: "+66 (089)-928-2134" },
    { id: 2, name: "Work", number: "+41 (112)-435-9887" },
  ],
  emails: [
    { id: 1, name: "Personal", email: "elsie-goodman@mail.com" },
    { id: 2, name: "Work", email: "elsie@work.com" },
  ],
}

const { city, country, emails, imgUrl, imgBackground, name, tels } = contact

class Contact extends Component {
  static propTypes = {}
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      telDataSource: ds.cloneWithRows(tels),
      emailDataSource: ds.cloneWithRows(emails),
    }
  }

  renderContactHeader = () => (
    <View style={styles.cardHeaderContainer}>
      <Image
        style={{
          backgroundColor: "rgb(45,62,80)",
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
              flexDirection: "row",
              alignItems: "center",
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
            <View style={{ backgroundColor: "transparent" }}>
              <Text style={styles.contactHeaderdDepartment}>
                {city}, {country}
              </Text>
            </View>
          </View>
        </View>
      </Image>
    </View>
  )

  onPressPlace = () => {
    console.log("place")
  }

  onPressTel = number => {
    Linking.openURL(`tel:${number}`).catch(err => console.log("Error:", err))
  }

  onPressSms = () => {
    console.log("sms")
  }

  onPressEmail = email => {
    Linking.openURL(`mailto:${email}?subject=subject&body=body`).catch(err =>
      console.log("Error:", err),
    )
  }

  renderTel = () => (
    <ListView
      contentContainerStyle={styles.contactBodyContainer}
      dataSource={this.state.telDataSource}
      renderRow={({ id, name, number }, _, k) => {
        console.log(_, k)
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
      contentContainerStyle={styles.contactBodyContainer}
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
        <View style={styles.cardWrapper}>
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
