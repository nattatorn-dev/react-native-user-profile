import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  postImage: {},
})

const Post = props => {
  const { containerStyle, image, imageHeight, imageWidth, postWidth } = props
  return (
    <View style={[styles.container, containerStyle]}>
      {image && (
        <Image
          style={[
            styles.postImage,
            {
              width: postWidth,
              height: postWidth * (imageHeight / imageWidth),
            },
          ]}
          source={{ uri: image }}
        />
      )}
    </View>
  )
}

Post.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  image: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  postWidth: PropTypes.number,
}

Post.defaultProps = {
  containerStyle: {},
  image: null,
  imageHeight: null,
  imageWidth: null,
  postWidth: null,
}

export default Post
