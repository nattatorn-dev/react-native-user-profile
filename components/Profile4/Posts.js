import React, { Component } from 'react'
import { Dimensions, ListView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Post from './Post'

const windowWidth = Dimensions.get('window').width
const space = 10
const postContainerWidth = (windowWidth - space * 3) / 2
const styles = StyleSheet.create({
  container: {},
  postContainer: {
    marginTop: 10,
    marginRight: 10,
    padding: 0,
    borderWidth: 0,
    width: postContainerWidth,
  },
})

class Posts extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
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
  }

  state = {
    postDS: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    }).cloneWithRows(this.props.posts),
  }

  render() {
    return (
      <ListView
        scrollEnabled={false}
        removeClippedSubviews={false}
        contentContainerStyle={[styles.container, this.props.containerStyle]}
        dataSource={this.state.postDS}
        renderRow={e => {
          return (
            <Post
              key={`post-${e.id} `}
              containerStyle={styles.postContainer}
              postWidth={postContainerWidth}
              {...e}
            />
          )
        }}
      />
    )
  }
}

export default Posts