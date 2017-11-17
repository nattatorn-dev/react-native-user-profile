import React, { Component } from "react"
import { Card, Icon, Rating } from "react-native-elements"
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  ListView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerScroll,
  TabViewPagerPan,
} from "react-native-tab-view"
import SimplePage from "./SimplePage"
import PropTypes from "prop-types"

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
  cardHeaderContainer: {
    marginTop: 45,
    marginBottom: 10,
  },

  contactHeaderName: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 4,
    textAlign: "center",
    color: "#5B5A5A",
  },
  placeIcon: {
    color: "#a5a5a5",
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
    borderRadius: 40,
    height: 80,
    marginBottom: 10,
    width: 80,
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
  container: {
    flex: 1,
    // marginLeft: 25,
    // marginRight: 25,
    marginBottom: 12,
  },
  tabbar: {
    backgroundColor: "transparent",
  },
  indicator: {
    backgroundColor: "transparent",
  },
  page: {
    // width: Dimensions.get("window").width,
    marginTop: 10,
  },
})

const contact = {
  imgUrl: "https://www.mendetails.com/wp-content/uploads/2015/10/JD1.jpg",
  imgBackground:
    "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
  name: "Elsie Chanu",
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
  feeds: [
    {
      id: 1,
      name: "Richard Cruz",
      title: "1217 Vene Lane",
      description:
        "ut ullam dolorem earum nulla. Eligendi voluptas occaecati cupiditate qui.",
      image:
        "https://www.mcdonalds.com/content/dam/usa/promotions/desktop/OFYQ_960x542.jpg",
    },
    {
      id: 2,
      name: "Richard Cruz",
      title: "1217 Vene Lane",
      description:
        "figbumecceruhgijzobkamamosihdelanzeogahosjosluhzosjiubugiglimohirubaremafamibdijenoskeogwomcodawipjedjuwafomicukizafajal",
      image:
        "https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    },
    {
      id: 3,
      name: "Richard Cruz",
      title: "1217 Vene Lane",
      description:
        "figbumecceruhgijzobkamamosihdelanzeogahosjosluhzosjiubugiglimohirubaremafamibdijenoskeogwomcodawipjedjuwafomicukizafajal",
      image:
        "https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
    },
  ],
}

const {
  city,
  country,
  emails,
  imgUrl,
  imgBackground,
  name,
  tels,
  feeds,
} = contact

class Profile2 extends Component {
  static propTypes = {}
  static navigationOptions = {
    header: null,
  }

  state = {
    index: 0,
    routes: [
      { key: "1", title: "Active", count: 31, icon: "md-restaurant" },
      { key: "2", title: "Like", count: 86, icon: "md-bicycle" },
      { key: "3", title: "Following", count: 95, icon: "md-color-palette" },
      { key: "4", title: "Followers", count: "1.3 K", icon: "md-bicycle" },
    ],
    // telDataSource: new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // }).cloneWithRows(tels),
    // emailDataSource: new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // }).cloneWithRows(emails),
  }

  _handleIndexChange = index => {
    this.setState({
      index,
    })
  }

  _renderIcon = ({ route }) => {
    return (
      <Icon
        iconStyle={styles.placeIcon}
        name="keyboard-arrow-up"
        onPress={this.onPressPlace}
        underlayColor="transparent"
      />
    )
  }

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        renderLabel={this._renderLabel(props)}
        pressOpacity={0.8}
        // pressColor="rgba(255, 64, 129, .5)"
        style={styles.tabbar}
      />
    )
  }

  _renderScene = ({ route }) => {
    console.log("feeds", feeds)
    switch (route.key) {
      case "1":
        return <SimplePage style={styles.page} data={feeds} />
      case "2":
        return <SimplePage style={styles.page} data={feeds} />
      case "3":
        return <SimplePage style={styles.page} data={feeds} />
      case "4":
        return <SimplePage style={styles.page} data={feeds} />
      default:
        return <View />
    }
  }

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i)
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? "black" : "gray"),
    )
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    })

    return (
      <View>
        <Animated.Text
          style={[
            {
              color: "gray",
              textAlign: "center",
              fontWeight: "400",
              fontSize: 17.5,
              marginBottom: 4,
            },
            { color },
          ]}
        >
          {route.count}
        </Animated.Text>
        <Animated.Text
          style={[
            {
              fontSize: 12.5,
              color: "gray",
              textAlign: "center",
            },
            ,
            { color },
          ]}
        >
          {route.title}
        </Animated.Text>
      </View>
    )
  }

  renderContactHeader = () => (
    <View style={styles.cardHeaderContainer}>
      <View style={styles.imageContainer}>
        <View
          style={{
            marginBottom: 12,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.image}
            source={{
              uri: imgUrl,
            }}
          />
          <Text style={styles.contactHeaderName}>{name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View>
            <Icon
              name="facebook-with-circle"
              type="entypo"
              color="#3B5A98"
              onPress={() => console.log("facebook")}
            />
          </View>
          <View style={{ marginLeft: 14, marginRight: 14 }}>
            <Icon
              name="twitter-with-circle"
              type="entypo"
              color="#56ACEE"
              onPress={() => console.log("twitter")}
            />
          </View>
          <View>
            <Icon
              name="google--with-circle"
              type="entypo"
              color="#DD4C39"
              onPress={() => console.log("google")}
            />
          </View>
        </View>
      </View>
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

  // renderTel = () => (
  //   <ListView
  //     contentContainerStyle={styles.contactBodyContainer}
  //     dataSource={this.state.telDataSource}
  //     renderRow={({ id, name, number }, _, k) => {
  //       console.log(_, k)
  //       return (
  //         <Tel
  //           key={`tel-${id}`}
  //           index={k}
  //           name={name}
  //           number={number}
  //           onPressSms={this.onPressSms}
  //           onPressTel={this.onPressTel}
  //         />
  //       )
  //     }}
  //   />
  // )

  // renderEmail = () => (
  //   <ListView
  //     contentContainerStyle={styles.contactBodyContainer}
  //     dataSource={this.state.emailDataSource}
  //     renderRow={({ id, name, email }, _, k) => {
  //       return (
  //         <Email
  //           key={`email-${id}`}
  //           index={k}
  //           name={name}
  //           email={email}
  //           onPressEmail={this.onPressEmail}
  //         />
  //       )
  //     }}
  //   />
  // )

  _renderPager = props => {
    return Platform.OS === "ios" ? (
      <TabViewPagerScroll {...props} />
    ) : (
      <TabViewPagerPan {...props} />
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.cardWrapper}>
          <Card containerStyle={styles.cardContainer}>
            {this.renderContactHeader()}
            <TabViewAnimated
              style={[styles.container, this.props.style]}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderPager={this._renderPager}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
            />
          </Card>
        </View>
      </ScrollView>
    )
  }
}

export default Profile2
