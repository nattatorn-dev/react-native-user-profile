import React from 'react'
import PropTypes from 'prop-types'

import productData from './product.json'

import { NavAbsolute } from '../../components'
import Product from './Product'

const ProductScreen = (props) => {
  props.navigation.setOptions({
    header: ({ navigation }) => (
        <NavAbsolute
          navigation={navigation}
          title={productData.title}
          subTitle={productData.address}
        />
    ),
  })

  return <Product {...productData} {...props}/>
}

export default ProductScreen
