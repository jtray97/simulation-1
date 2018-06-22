import React, { Component } from 'react';
import './App.css';
import Product from './Components/Product'
import Adding from './Components/Adding'
class App extends Component {
  constructor(){
    super()
    this.state ={
        products:[],
    }
  }

 
  render() {
    return (
      <div className="App">
        <Adding/>
        <Product img={'http://via.placeholder.com/350x150'} name={'fancy'} price={35}/>
      </div>
    );
  }
}

export default App;
