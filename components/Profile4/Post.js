import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  postImage: {},
})

// const Post = ({ containerStyle, image }) => (
//   <View style={[styles.container, containerStyle]}>
//     {image && (
//       <Image
//         style={styles.postImage}
//         source={{ uri: image }}
//         resizeMode="cover"
//       />
//     )}
//   </View>
// )

class Post extends Component {
  state = {
    height: 0,
  }

  componentWillMount() {
    const { postWidth } = this.props
    Image.getSize(
      this.props.image,
      (width, height) => {
        const calHeight = postWidth * (height / width)
        this.setState({ height: calHeight })
      },
      () => {
        this.setState({ height: postWidth })
      }
    )
  }

  render() {
    const { containerStyle, image, postWidth } = this.props
    return (
      <View style={[styles.container, containerStyle]}>
        {image && (
          <Image
            style={[
              styles.postImage,
              { width: postWidth, height: this.state.height },
            ]}
            source={{ uri: image }}
          />
        )}
      </View>
    )
  }
}

Post.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  image: PropTypes.string,
}

Post.defaultProps = {
  containerStyle: {},
  image: null,
}

export default Post
