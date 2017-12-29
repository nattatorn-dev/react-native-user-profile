import React from 'react'
import PropTypes from 'prop-types'

import contactData from '../../mocks/contact.json'

import Profile from './Profile'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
  header: null,
})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen
