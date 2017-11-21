import React, { Component } from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories'


class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <Categories />
      </div>
    );
  }
}

export default App;
