import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {},
  postImage: {},
})

const Post = ({
  containerStyle,
  image,
  imageHeight,
  imageWidth,
  postWidth,
}) => {
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
          source={{uri: image}}
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
