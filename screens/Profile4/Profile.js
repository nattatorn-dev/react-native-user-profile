import React, { Component } from 'react'
import { Animated, Image, Platform, ScrollView, Text, View } from 'react-native'
import {
  TabViewAnimated,
  TabBar,
  TabViewPagerScroll,
  TabViewPagerPan,
} from 'react-native-tab-view'
import PropTypes from 'prop-types'

import styles from './ProfileStyle'
import Posts from './Posts'

class Profile3 extends Component {
  static propTypes = {
    avatar: PropTypes.string.isRequired,
    avatarBackground: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    tabContainerStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        words: PropTypes.string.isRequired,
        sentence: PropTypes.string.isRequired,
        paragraph: PropTypes.string.isRequired,
        image: PropTypes.string,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          username: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
        }),
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
    const leftCol = [items[0]]
    const rightCol = [items[1]]
    let leftHeight = items[0].imageHeight
    let rightHeight = items[1].imageHeight
    items.forEach((item, i) => {
      if (i > 1) {
        if (leftHeight <= rightHeight) {
          leftCol.push(items[i])
          leftHeight = leftHeight + items[i].imageHeight
        } else {
          rightCol.push(items[i])
          rightHeight = rightHeight + items[i].imageHeight
        }
      }
    })
    return { leftCol, rightCol }
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
          <Image
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
          </Image>
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
        <Posts
          containerStyle={styles.sceneContainer}
          posts={this.state.postsMasonry.leftCol}
        />
        <Posts
          containerStyle={styles.sceneContainer}
          posts={this.state.postsMasonry.rightCol}
        />
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
