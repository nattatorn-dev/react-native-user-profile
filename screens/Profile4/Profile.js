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
import Posts from './Posts'

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
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        imageHeight: PropTypes.number,
        imageWidth: PropTypes.number,
        postWidth: PropTypes.number,
      })
    ).isRequired,
  }

  static defaultProps = {
    containerStyle: {},
    tabContainerStyle: {},
  }

  state = {
    tabs: {
      index: 0,
      routes: [
        { key: '1', title: 'PHOTOS', count: 687 },
        { key: '3', title: 'FOLLOWERS', count: '1.3 M' },
        { key: '2', title: 'FOLLOWING', count: 90 },
      ],
    },
    postsMasonry: {},
  }

  componentWillMount() {
    this.setState({ postsMasonry: this.itemsToMansonry(this.props.posts) })
  }

  itemsToMansonry = items => {
    return items.reduce(
      (p, c, k) => {
        if (k > 1) {
          if (p.leftHeight <= p.rightHeight) {
            return {
              ...p,
              leftCol: [...p.leftCol, c],
              leftHeight: p.leftHeight + c.imageHeight,
            }
          } else {
            return {
              ...p,
              rightCol: [...p.rightCol, c],
              rightHeight: p.rightHeight + c.imageHeight,
            }
          }
        } else {
          return p
        }
      },
      {
        leftCol: [items[0]],
        rightCol: [items[1]],
        leftHeight: items[0].imageHeight,
        rightHeight: items[1].imageHeight,
      }
    )
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
        renderLabel={this._renderLabel(props)}
        pressOpacity={0.8}
        style={styles.tabBar}
      />
    )
  }

  _renderScene = ({ route: { key } }) => {
    switch (key) {
      case '1':
        return this.renderMansonry2Col()
      case '2':
        return this.renderMansonry2Col()
      case '3':
        return this.renderMansonry2Col()
      default:
        return <View />
    }
  }

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i)
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? 'black' : 'gray')
    )
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    })

    return (
      <View>
        <Animated.Text style={[styles.tabLabelNumber, { color }]}>
          {route.count}
        </Animated.Text>
        <Animated.Text style={[styles.tabLabelText, { color }]}>
          {route.title}
        </Animated.Text>
      </View>
    )
  }

  _renderPager = props => {
    return Platform.OS === 'ios' ? (
      <TabViewPagerScroll {...props} />
    ) : (
      <TabViewPagerPan {...props} />
    )
  }

  renderContactHeader = () => {
    const { avatar, avatarBackground, name, bio } = this.props
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            style={styles.coverImage}
            source={{
              uri: avatarBackground,
            }}
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
            style={styles.profileImage}
            source={{
              uri: avatar,
            }}
          />
        </View>
      </View>
    )
  }

  renderMansonry2Col = () => {
    return (
      <View style={styles.mansonryContainer}>
        <View>
          <Posts
            containerStyle={styles.sceneContainer}
            posts={this.state.postsMasonry.leftCol}
          />
        </View>
        <View>
          <Posts
            containerStyle={styles.sceneContainer}
            posts={this.state.postsMasonry.rightCol}
          />
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.cardContainer}>
            {this.renderContactHeader()}
            <TabViewAnimated
              style={[styles.tabContainer, this.props.tabContainerStyle]}
              navigationState={this.state.tabs}
              renderScene={this._renderScene}
              renderPager={this._renderPager}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
            />
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Profile3
