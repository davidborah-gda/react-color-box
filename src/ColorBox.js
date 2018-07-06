import React, { Component } from 'react';

import './ColorBox.css';


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red"
    };
  }

  First() {
    this.setState({
      color: this.state.color
    });
  }
  Second() {
    this.setState({
      color: this.state.color
    });
  }

  changeColor(evt) {

    this.setState({
      color: (evt.target.value)
    });
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

            onChange={this.changeColor.bind(this)}
            className="ColorBox-input" />
          <h2>Second Color</h2>
          <input
            placeholder="HEX Color Code"

            onChange={this.changeColor.bind(this)}
            className="ColorBox-input" />
        </section>
      </div>
    )
  }

}

export default ColorBox