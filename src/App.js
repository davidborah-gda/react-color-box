import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: "red"
    };
  }

  red(){
    this.setState({
      color: "red"
    });
  }
  green(){
    this.setState({
      color: "green"
    });
  }
  render() {
    const styles = {backgroundColor: 'red'};
    return (
      <div>
        <button onClick={this.red.bind(this)}>Red</button>
        <h1 className = "box" style = {styles}>{this.state.color}</h1>
        <button onClick={this.green.bind(this)}>Green</button>
      </div>
    );
  }
}

export default App;
