import React, { Component } from 'react'
import { AsyncStorage, ScrollView, StyleSheet, Text, View } from 'react-native'
import { List, ListItem, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import * as Colors from './constants'

const styles = StyleSheet.create({
  infoTextStyle: {
    fontSize: 14,
    paddingTop: 20,
    marginLeft: 20,
    color: 'black',
    opacity: 0.7,
  },
  settigsGreyBackground: {
    backgroundColor: 'rgba(247, 247, 247, 1)',
    paddingTop: 20,
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

  onChangeAutoComplete = () => {
    // this.props.changeAutoComplete(!this.props.autocomplete)
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
    return (
      <ScrollView style={styles.settigsGreyBackground}>
        <InfoText text="General" />
        <List>
          <ListItem
            title="Home"
            titleStyle={{ fontSize: 18 }}
            rightTitle={this.props.default_tab}
            onPress={this.onDefaultStorySetting}
          />
        </List>
        <InfoText text="Stories" />
        <List>
          <ListItem
            title="Sources"
            titleStyle={{ fontSize: 18 }}
            onPress={this.onSourcesSetting}
          />
          <ListItem
            title="Readability"
            titleStyle={{ fontSize: 18 }}
            onPress={this.onReadabilitySetting}
          />
        </List>
        <InfoText text="Search" />
        <List>
          <ListItem
            switchButton
            title="Autocomplete"
            titleStyle={{ fontSize: 18 }}
            hideChevron
            switchOnTintColor={Colors.tintColor}
            switched={this.props.autocomplete}
            onSwitch={this.onChangeAutoComplete}
          />
          <ListItem
            title="Region"
            rightTitle="None (Default)"
            titleStyle={{ fontSize: 18 }}
            onPress={this.onRegionSetting}
          />
        </List>
        <InfoText text="Privacy" />
        <List>
          <ListItem
            switchButton
            title="Save Recents"
            titleStyle={{ fontSize: 18 }}
            hideChevron
            switchOnTintColor={Colors.tintColor}
            switched={this.props.save_recent}
            onSwitch={this.onChangeSaveRecents}
          />
          <ListItem
            title="Clear Recents"
            hideChevron
            titleStyle={{ fontSize: 18 }}
            onPress={this.onClearRecents}
          />
        </List>
        <InfoText text="Other" />
        <List>
          <ListItem title="Send Feedback" titleStyle={{ fontSize: 18 }} />
          <ListItem title="Share" titleStyle={{ fontSize: 18 }} />
          <ListItem title="Leave a Rating" titleStyle={{ fontSize: 18 }} />
        </List>
        <InfoText text="Version 0.1.1" />
        <View style={{ paddingBottom: 50 }} />
      </ScrollView>
    )
  }
}

const InfoText = ({ text }) => {
  return <Text style={styles.infoTextStyle}>{text}</Text>
}

InfoText.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SettingsScreen
