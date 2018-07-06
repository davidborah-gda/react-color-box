import React, { Component } from 'react';

import './ColorBox.css';


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green",
      first: "red",
      second: "yellow"
    };
  }

  First() {
    this.setState({
      color: this.state.first
    });
  }
  Second() {
    this.setState({
      color: this.state.second
    });
  }

  changeColor(evt) {

    this.setState({
      color: "red"
    });
  }

  changeFirstColor(evt){
    this.setState({
     first: evt.target.value
    })
  }

  changeSecondColor(evt){
    this.setState({
      second: evt.target.value
    })
  }
  

  render() {
    const styles = { backgroundColor: this.state.color };
    return (
      <div className="ColorBox-container">
        {this.props.title ? <h1 className="ColorBox-title">{this.props.title}</h1> : null}
        <h1 className="box" style={styles}></h1>
        <section>
          <button onClick={this.First.bind(this)} className="ColorBox-button">First</button>
          <button onClick={this.Second.bind(this)} className="ColorBox-button">Second</button>
        </section>
        <section><h2>First Color</h2>
          <input
            placeholder="HEX Color Code"
            onChange={this.changeFirstColor.bind(this)}
            className="ColorBox-input"
            value= {this.state.first} />
          <h2>Second Color</h2>
          <input
            placeholder="HEX Color Code"
            onChange={this.changeSecondColor.bind(this)}
            className="ColorBox-input"
            value= {this.state.second} />
        </section>
      </div>
    )
  }

}

export default ColorBox