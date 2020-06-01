import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dasboard';
import Form from './components/form/Form';
import Header from './components/header/Header';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inventory: [],

    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({ inventory: res.data })
    })
  }


  render() {
    const { inventory } = this.state
    return (
      <div className="App" >
        <Header />
        <div className='organize'>
          <Dashboard
            updatedInventory={this.componentDidMount}
            inventory={this.state.inventory}
          />
          <Form
            updatedInventory={this.componentDidMount}
            inventory={this.state.inventory}
          />
        </div>
      </div >
    );
  }
}
export default App;
