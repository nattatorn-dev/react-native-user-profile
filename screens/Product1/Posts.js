import React, { Component } from 'react'
import { Dimensions, ListView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Post from './Post'

const space = 10
const postContainerWidth = (Dimensions.get('window').width - space * 3) / 2

const styles = StyleSheet.create({
  container: {},
  postContainer: {
    margin: 5,
    padding: 0,
    borderWidth: 0,
  },
})

class Posts extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        imageHeight: PropTypes.number,
        imageWidth: PropTypes.number,
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
