import React from 'react';
import './product.scss';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button';
import slugify from '../../utils/slugify';

  const Product = ({product, history, match, location}) => {
    console.log(history)
    console.log(match)
    console.log(location)
    const productSlug = slugify(product.name)
    return (
      <div
        className='product'
        >
        <div
          className='image'
          style= {{
            backgroundImage: `url(${product.image})`
          }}
          />
        <CustomButton
          onClick={()=> history.push(`/product/${productSlug}`)}
          inverted
          >Ver Produto</CustomButton>
        <div className='collection-footer'>
          <div className='name'>{product.name}</div>
          <div className='price'>{product.actual_price}</div>
        </div>
      </div>
    )
  }

export default withRouter(Product);
