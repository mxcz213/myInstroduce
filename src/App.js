import React, { Component } from 'react';

import './css/App.css';
import Header from './components/header';
import SpaceInfo from './components/spaceInfo.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header ref="header"></Header>
        <SpaceInfo></SpaceInfo>
      </div>
    );
  }
}

export default App;
