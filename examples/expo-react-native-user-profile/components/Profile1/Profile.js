import React from "react";
import {
  Platform,
  Image,
  Text,
  View,
  Linking,
  StyleSheet,
  ScrollView
} from "react-native";
import { Card, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const contact = {
  imgUrl: "https://www.mendetails.com/wp-content/uploads/2015/10/JD1.jpg",
  imgBackground:
    "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
  name: "Elsie Goodman",
  postion: "Front-end Engineer",
  country: "Thailand",
  city: "Bangkok",
  tels: [
    { title: "Mobile", number: "(089) 928-2134" },
    { title: "Work", number: "(999) 435-9887" }
  ],
  emails: [
    { title: "Personal", email: "elsie-goodman@mail.com" },
    { title: "Work", email: "elsie@work.com" }
  ]
};

const { city, country, imgUrl, imgBackground, name, department } = contact;

const Contact = () => {
  const renderContactHeader = () => (
    <View style={styles.cardHeaderContainer}>
      <Image
        style={{
          backgroundColor: "rgb(45,62,80)",
          paddingTop: 35,
          paddingBottom: 20
        }}
        blurRadius={10}
        source={{
          uri: imgBackground
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: imgUrl
            }}
          />
          <Text style={styles.contactHeaderName}>{name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <View>
              <Icon
                iconStyle={styles.placeIcon}
                name="place"
                onPress={handleTel}
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
  );
  const handleTel = () => {
    Linking.openURL("tel:1242").catch(err => console.log("Error:", err));
  };

  const handleEmailTo = () => {
    Linking.openURL(
      "mailto:somethingemail@gmail.com?subject=abcdefg&body=body"
    ).catch(err => console.log("Error:", err));
  };

  const renderTel = () => (
    <View style={styles.contactBodyContainer}>
      {contact.tels.map((e, k) => (
        <View style={styles.contactBodyItem} key={`tel-${k}`}>
          <View
            style={{
              flex: 2,
              justifyContent: "center"
            }}
          >
            {k === 0 && (
              <Icon
                iconStyle={styles.telIcon}
                name="call"
                onPress={handleTel}
                underlayColor="transparent"
              />
            )}
          </View>
          <View
            style={{
              flex: 6,
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginBottom: 5
              }}
            >
              <Text style={{ fontSize: 16 }}>{e.number}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Text style={{ fontSize: 14, color: "gray", fontWeight: "200" }}>
                {e.title}
              </Text>
            </View>
          </View>
          <View style={{ flex: 2, justifyContent: "flex-start" }}>
            <Icon
              iconStyle={styles.smsIcon}
              name="textsms"
              onPress={handleTel}
              underlayColor="transparent"
            />
          </View>
        </View>
      ))}
    </View>
  );

  const renderEmail = () => (
    <View style={styles.contactBodyContainer}>
      {contact.emails.map((e, k) => (
        <View style={styles.contactBodyItem} key={`tel-${k}`}>
          <View
            style={{
              flex: 2,
              justifyContent: "center"
              // alignItems: "flex-start"
            }}
          >
            {k === 0 && (
              <Icon
                iconStyle={styles.telIcon}
                name="email"
                onPress={handleEmailTo}
                underlayColor="transparent"
              />
            )}
          </View>
          <View
            style={{
              flex: 8,
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginBottom: 5
              }}
            >
              <Text style={{ fontSize: 16 }}>{e.email}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Text style={{ fontSize: 14, color: "gray", fontWeight: "200" }}>
                {e.title}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );

  const renderSeparator = () => (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flexDirection: "row", flex: 2 }} />
      <View
        style={{
          flexDirection: "row",
          flex: 8,
          borderColor: "#EDEDED",
          borderWidth: 0.8
        }}
      />
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.cardWrapper}>
        <Card containerStyle={styles.cardContainer}>
          {renderContactHeader()}
          {renderTel()}
          {renderSeparator()}
          {renderEmail()}
        </Card>
      </View>
    </ScrollView>
  );
};

// Contact.propTypes = {
//   contact: PropTypes.object.isRequired
// };

export default Contact;

Contact.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1
  },
  cardContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    borderWidth: 0,
    backgroundColor: "#fff"
  },
  cardHeaderContainer: {
    // backgroundColor: "rgb(45,62,80)",
    // paddingTop: 35,
    // paddingBottom: 20
  },
  contactBodyContainer: {
    justifyContent: "center",
    paddingTop: 10
  },
  contactBodyItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 25
  },
  contactBodyText: {
    flex: 4
    // textAlign: "left",
    // width: 110
  },
  contactBodyColon: {
    flex: 1
    // textAlign: "center"
  },
  contactBodyTitle: {
    flex: 4,
    justifyContent: "flex-start"
  },
  contactHeaderName: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
    color: "#fff"
  },
  contactHeaderIconContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 5
  },
  contactHeaderIcon: {
    color: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 30
  },
  telIcon: {
    color: "#01C89E",
    fontSize: 30
  },
  smsIcon: {
    color: "gray",
    fontSize: 30
  },
  placeIcon: {
    color: "white",
    fontSize: 26
  },
  contactHeaderdDepartment: {
    fontSize: 15,
    textAlign: "center",
    color: "#a5a5a5",
    fontWeight: "600"
  },
  contactBodyContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 30
  },
  image: {
    borderColor: "#01C89E",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170
  },
  imageContainer: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1
      },
      android: {
        alignItems: "center"
      }
    })
  }
});
