import React, { Component } from 'react'
import { AsyncStorage, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Avatar, List, ListItem, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import { datetime } from '../../utils/'

import * as Colors from './constants'

const styles = StyleSheet.create({
  infoTextStyle: {
    fontSize: 16,
    marginLeft: 20,
    color: 'gray',
    fontWeight: '500',
    // opacity: 0.7,
  },
  settigsGreyBackground: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  date: {
    color: 'gray',
    fontSize: 12.5,
  },
  postRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    // width: Dimensions.get('window').width * 1,
  },
  postImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.075)',
    height: 200,
  },
  userImage: {
    marginRight: 12,
  },
  wordRow: {
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  wordText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
  },
  list: {
    paddingLeft: 2,
  },
})

class SettingsScreen extends Component {
  static propTypes = {
    // autocomplete: PropTypes.bool.isRequired,
    // changeAutoComplete: PropTypes.func.isRequired,
    // changeSaveRecent: PropTypes.func.isRequired,
    // default_tab: PropTypes.string.isRequired,
    // getAutoComplete: PropTypes.func.isRequired,
    // getDefaultTab: PropTypes.func.isRequired,
    // getSaveRecent: PropTypes.func.isRequired,
    // lang: PropTypes.string.isRequired,
    // navigation: PropTypes.object.isRequired,
    // save_recent: PropTypes.bool.isRequired,
  }

  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused }) => (
        <Icon
          name="settings"
          size={24}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      ),
      header: <View style={{ backgroundColor: Colors.tintColor }} />,
    }
  }

  static async componentDidMount() {
    // await this.props.getDefaultTab()
    // await this.props.getAutoComplete()
    // await this.props.getSaveRecent()
  }

  state = {
    pushNotifications: true,
  }

  onChangePushNotifications = () => {
    // this.props.changeAutoComplete(!this.props.autocomplete)
    this.setState({
      pushNotifications: !this.state.pushNotifications,
    })
  }

  onChangeSaveRecents = () => {
    // this.props.changeSaveRecent(!this.props.save_recent)
  }

  onDefaultStorySetting = () => {
    // this.props.navigation.navigate('defaultTabSetting')
  }

  onReadabilitySetting = () => {
    // this.props.navigation.navigate('readabilitySetting')
  }

  onRegionSetting = () => {
    // this.props.navigation.navigate('regionSetting')
  }

  onSourcesSetting = () => {
    // this.props.navigation.navigate('sourcesSetting')
  }

  async onClearRecents() {
    await AsyncStorage.clear()
  }

  render() {
    console.log(this.props)
    return (
      <ScrollView style={styles.settigsGreyBackground}>
        <View style={styles.postRow}>
          <View style={styles.userImage}>
            <Avatar
              large
              rounded
              source={{
                uri: this.props.avatar,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{this.props.name}</Text>
            <Text
              style={{
                fontSize: 16,
                color: 'gray',
              }}
            >
              {this.props.emails[0].email}
            </Text>
          </View>
        </View>
        <InfoText text="System" />
        <List containerStyle={{ marginBottom: 0, marginTop: 0 }}>
          <ListItem
            title="Your Location"
            rightTitle="New York"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onSourcesSetting}
            leftIcon={{
              name: 'place',
              type: 'material',
            }}
          />
          <ListItem
            switchButton
            title="Push Notifications"
            titleStyle={{ fontSize: 16 }}
            hideChevron
            switchOnTintColor={Colors.tintColor}
            switched={this.state.pushNotifications}
            onSwitch={this.onChangePushNotifications}
            leftIcon={{ name: 'bell', type: 'entypo' }}
          />
          <ListItem
            title="Language"
            rightTitle="English"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onSourcesSetting}
            leftIcon={{ name: 'language', type: 'material' }}
            // containerStyle={styles.list}
          />
          <ListItem
            // chevronColor="transparent"
            hideChevron
            title="App Settings"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onSourcesSetting}
            leftIcon={{ name: 'gear', type: 'octicon' }}
          />
        </List>
        <InfoText text="More" />
        <List containerStyle={{ marginBottom: 0, marginTop: 0 }}>
          <ListItem
            chevronColor="transparent"
            title="About US"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onSourcesSetting}
            leftIcon={{ name: 'md-information-circle', type: 'ionicon' }}
          />
          <ListItem
            chevronColor="transparent"
            title="Terms and Policies"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onReadabilitySetting}
            leftIcon={{ name: 'light-bulb', type: 'entypo' }}
          />
          <ListItem
            chevronColor="transparent"
            title="Share our App"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onReadabilitySetting}
            leftIcon={{ name: 'share', type: 'entypo' }}
          />
          <ListItem
            chevronColor="transparent"
            title="Rate Us"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onReadabilitySetting}
            leftIcon={{ name: 'star', type: 'entypo' }}
          />
          <ListItem
            chevronColor="transparent"
            title="Send FeedBack"
            titleStyle={{ fontSize: 16 }}
            onPress={this.onReadabilitySetting}
            leftIcon={{ name: 'feedback', type: 'materialicon' }}
          />
        </List>
      </ScrollView>
    )
  }
}

const InfoText = ({ text }) => {
  return (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 12,
        // paddingTop: 25,
        backgroundColor: '#F4F5F4',
      }}
    >
      <Text style={styles.infoTextStyle}>{text}</Text>
    </View>
  )
}

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SettingsScreen
