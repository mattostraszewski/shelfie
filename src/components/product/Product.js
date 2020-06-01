import React, { Component } from 'react';

export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const { price, image, product, deleteProduct, id } = this.props
    return (

      <div className='prodComp'>
        <div className='products'>

          <div>
            <img className='productImg' src={image} />
          </div>

          <div className='styleProds'>
            <div className='productPrice'>
              {`$${price}`}
            </div>

            <div className='productProd'>
              {product}
            </div>
          </div>

          <div>
            <button onclick={() => deleteProduct(id)}></button>
          </div>


        </div>
      </div>

    )
  }
}