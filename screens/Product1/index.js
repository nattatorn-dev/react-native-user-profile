import React from 'react'
import PropTypes from 'prop-types'

import productData from './product.json'

import { NavAbsolute } from '../../components'
import Product from './Product'

const ProductScreen = () => <Product {...productData} />

ProductScreen.navigationOptions = ({ navigation }) => ({
  header: (
    <NavAbsolute
      navigation={navigation}
      title={productData.title}
      subTitle={productData.address}
    />
  ),
})

ProductScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProductScreen
