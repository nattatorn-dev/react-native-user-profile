import React, { Component } from 'react'
import { Dimensions, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Post from './Post'

const space = 1
const postContainerWidth = (Dimensions.get('window').width - space * 2) / 2

const styles = StyleSheet.create({
  container: {},
  postContainer: {
    marginBottom: 1,
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

  render() {
    return (
      <FlatList
        scrollEnabled={false}
        removeClippedSubviews={false}
        contentContainerStyle={[styles.container, this.props.containerStyle]}
        data={this.props.posts}
        renderItem={list => {
          return (
            <Post
              key={`post-${list.item.id} `}
              containerStyle={styles.postContainer}
              postWidth={postContainerWidth}
              {...list.item}
            />
          )
        }}
      />
    )
  }
}

export default Posts
