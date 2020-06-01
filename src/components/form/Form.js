import React, { Component } from 'react';
import axios from 'axios'

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageUrlInput: '',
      productNameInput: '',
      priceInput: 0.00,
      productId: null
    }
  }

  handleChange = (e) => {

    // var r = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm

    // if (r.test(e)) {
    //   this.setState({
    //     imageUrlInput: e
    //   })
    // }

    // else {
    this.setState({
      [e.target.name]: e.target.value
    })
    // }
  }

  removeInputs = () => {
    this.setState({
      imageUrlInput: '',
      productNameInput: '',
      priceInput: 0.00
    })
  }

  addToDatabase = (data) => {
    const { imageUrlInput, productNameInput, priceInput } = this.state
    const { updatedInventory } = this.props
    const body = {
      image: imageUrlInput,
      name: productNameInput,
      price: priceInput
    }
      ``
    axios.post('/api/product', body).then((res) => {
      updatedInventory(res.data).then(() => {
        this.removeInputs()
      })
    })
  }



  render() {
    const { imageUrlInput, productNameInput, priceInput } = this.state

    return (

      <div className='form'>

        <div>
          {!this.state.imageUrlInput ?
            <img className='previewImage' src='https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/656/original/DevMountain.jpg?1467187319' alt='default product' />
            : <img className='previewImage' src={this.state.imageUrlInput} alt='product' />}
        </div>

        <div className='inputs' >
          <label>Image Url:</label>
          <input name='imageUrlInput' value={imageUrlInput} onChange={(e) => this.handleChange(e)} placeholder="Image URL" />
        </div>

        <div className='inputs' >
          <label>Product Name:</label>
          <input name='productNameInput' value={productNameInput} onChange={(e) => this.handleChange(e)} placeholder="Product Name" />
        </div>

        <div className='inputs' >
          <label>Price:</label>
          <input name='priceInput' value={priceInput} onChange={(e) => this.handleChange(e)} placeholder="Price" />
        </div>

        <div className='derpbuttons'>
          <div>
            <button className='formButtons' onClick={(e) => this.removeInputs(e)}>Cancel</button>
          </div>

          <div>
            <button className='formButtons' onClick={(e) => this.addToDatabase(e)}>Add To Inventory</button>
          </div>
        </div>

      </div >
    )
  }
}

