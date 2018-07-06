import React, { Component } from 'react';

import './App.css';
import ColorBox from './ColorBox';

class App extends Component {
  
  render() {
    return (
      <div>
        <ColorBox title="ColorBox" />
        <ColorBox />
      </div>
    );
  }
}

export default App;
