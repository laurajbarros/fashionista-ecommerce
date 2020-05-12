import React from 'react';
import './products.scss';
import Product from '../product/product';
import api from '../../services/api';

class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading:false,
      products: []
    }
  }

  componentDidMount () {
    this.setState({isLoading:true});
    api.get().then(response => {
      this.setState({products:response.data})
    })
  }

  render(){
    const { products } = this.state;
    return (
      <div className='products'>
        {
          products
          .map((product, index) => (
            <Product
              key={index} product={product}/>
          ))
        }
      </div>
    )
  }
}

export default Products;
