import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import MasonryList from '@appandflow/masonry-list'

import Post from './Post'

const windowWidth = Dimensions.get('window').width
const space = 10
const postContainerWidth = (windowWidth - space * 3) / 2
const styles = StyleSheet.create({
  masonryContainer: {
    marginLeft: 10,
  },
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

  itemAddImgHeight = () => {
    return this.props.posts.map(post => {
      Image.getSize(
        post.image,
        (width, height) => {
          post.imageHeight = height
          post.imageWidth = width
        },
        () => {
          post.imageHeight = 0
        }
      )
      return post
    })
  }

  render() {
    return (
      <MasonryList
        style={styles.masonryContainer}
        data={this.itemAddImgHeight()}
        renderItem={({ item }) => (
          <Post
            containerStyle={styles.postContainer}
            postWidth={postContainerWidth}
            {...item}
          />
        )}
        getHeightForItem={({ item }) => item.imageHeight + 2}
        numColumns={2}
        keyExtractor={item => item.id}
      />
    )
  }
}

export default Posts
