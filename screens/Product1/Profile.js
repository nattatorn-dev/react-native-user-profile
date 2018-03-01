import React, { Component } from 'react'
import {
  Animated,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  TabBar,
  TabViewAnimated,
  TabViewPagerPan,
  TabViewPagerScroll,
} from 'react-native-tab-view'
import PropTypes from 'prop-types'

import profileStyles from './ProfileStyle'

const styles = StyleSheet.create({ ...profileStyles })

class Profile3 extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    tabContainerStyle: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
    ]),
    // posts: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     image: PropTypes.string,
    //     imageHeight: PropTypes.number,
    //     imageWidth: PropTypes.number,
    //     postWidth: PropTypes.number,
    //   })
    // ).isRequired,
  }

  static defaultProps = {
    containerStyle: {},
    tabContainerStyle: {},
  }

  _handleIndexChange = index => {
    this.setState({
      tabs: {
        ...this.state.tabs,
        index,
      },
    })
  }

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorTab}
        pressOpacity={0.8}
        renderLabel={this._renderLabel(props)}
        style={styles.tabBar}
      />
    )
  }

  renderContactHeader = () => {
    const { avatar, avatarBackground, name, bio } = this.props
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={{
              uri: avatarBackground,
            }}
            style={styles.coverImage}
          >
            <View style={styles.coverTitleContainer}>
              <Text style={styles.coverTitle} />
            </View>
            <View style={styles.coverMetaContainer}>
              <Text style={styles.coverName}>{name}</Text>
              <Text style={styles.coverBio}>{bio}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.cardContainer}>{this.renderContactHeader()}</View>
        </View>
      </ScrollView>
    )
  }
}

export default Profile3
