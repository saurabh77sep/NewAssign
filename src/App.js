import React, { Component } from 'react';
import './App.css';

import Cart from './components/Cart';
import Header from './components/Header';
import Filter from './components/Filter';

import './App.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Header />

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3">
              <Filter />
            </div>
            <div class="col-sm-9">
              
              <Cart />
            </div>
          </div>
        </div>
      </div>
    );

  }
}
export default App;





