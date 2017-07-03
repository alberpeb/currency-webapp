import React, { Component } from 'react';
import CurrencyList from './CurrencyList.jsx';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <CurrencyList />
      </div>
    );
  }

}
