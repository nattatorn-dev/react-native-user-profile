import React, { Component } from 'react'
import { ScrollView, Switch, StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'

import Icon from './Icon'
import InfoText from './InfoText'

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: 'white',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
  },
  listItemContainer: {
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
})

class SettingsScreen extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    emails: PropTypes.arrayOf(
      PropTypes.shape({
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  state = {
    pushNotifications: true,
  }

  onPressOptions = () => {
    this.props.navigation.navigate('options')
  }

  onChangePushNotifications = () => {
    this.setState(state => ({
      pushNotifications: !state.pushNotifications,
    }))
  }

  render() {
    const { avatar, name, emails: [firstEmail] } = this.props
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri: avatar,
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 16 }}>{name}</Text>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              {firstEmail.email}
            </Text>
          </View>
        </View>
        <InfoText text="Account" />
        <View>
          <ListItem
            // switchButton
            hideChevron
            title="Push Notifications"
            containerStyle={styles.listItemContainer}
            rightElement={
              <Switch
                onValueChange={this.onChangePushNotifications}
                value={this.state.pushNotifications}
              />
            }
            leftIcon={
              <Icon
                containerStyle={{
                  backgroundColor: '#FFADF2',
                }}
                icon={{
                  type: 'material',
                  name: 'notifications',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Currency"
            rightTitle="USD"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FAD291' }}
                icon={{
                  type: 'font-awesome',
                  name: 'money',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Location"
            rightTitle="New York"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#57DCE7' }}
                icon={{
                  type: 'material',
                  name: 'place',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Language"
            rightTitle="English"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#FEA8A1' }}
                icon={{
                  type: 'material',
                  name: 'language',
                }}
              />
            }
          />
        </View>
        <InfoText text="More" />
        <View>
          <ListItem
            chevron
            title="About US"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#A4C8F0' }}
                icon={{
                  type: 'ionicon',
                  name: 'md-information-circle',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Terms and Policies"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{ backgroundColor: '#C6C7C6' }}
                icon={{
                  type: 'entypo',
                  name: 'light-bulb',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Share our App"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{
                  backgroundColor: '#C47EFF',
                }}
                icon={{
                  type: 'entypo',
                  name: 'share',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Rate Us"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            badge={{
              value: 5,
              textStyle: { color: 'white' },
              containerStyle: { backgroundColor: 'gray', marginTop: 0 },
            }}
            leftIcon={
              <Icon
                containerStyle={{
                  backgroundColor: '#FECE44',
                }}
                icon={{
                  type: 'entypo',
                  name: 'star',
                }}
              />
            }
          />
          <ListItem
            chevron
            title="Send FeedBack"
            onPress={() => this.onPressOptions()}
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
                containerStyle={{
                  backgroundColor: '#00C001',
                }}
                icon={{
                  type: 'materialicon',
                  name: 'feedback',
                }}
              />
            }
          />
        </View>
      </ScrollView>
    )
  }
}

export default SettingsScreen
