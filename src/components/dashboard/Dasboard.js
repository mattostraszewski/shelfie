import React, { Component } from 'react';
import Product from '../product/Product'
import axios from 'axios'

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  deleteProduct = (data) => {
    axios.delete('/api/product/${data.product_id}').then(() => {
      this.props.updatedInventory();
    });
  }

  render() {

    return (

      <div>
        {this.props.inventory.map(elem => (
          <Product key={elem.product_id} id={elem.product_id} image={elem.imageUrl} product={elem.productName} price={elem.productPrice} deleteProduct={deleteProduct} />
        ))
        }
      </div>



    )
  }
}